import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { CategoriesFilterService } from '../categories-filter.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product: any;
  @Input() order: any;
  @Input() searchText: string;
  @Input() field: string;
	public panelOpenState: boolean = false;
	private apiUrl = "./../assets/data/products.json";
	public data: any = {};
  public productList: any;
  public products: any;
  public idCategory: Number;

  constructor(private http: Http, private CategoriesFilter: CategoriesFilterService) { }

  ngOnInit() {
  	this.getProducts();
    this.getProductsList();
    this.updateCategoryFilter();
  }

  public getProducts() {
    return this.http.get(this.apiUrl)
    	.map((res: Response) => res.json())
  }

  public getProductsList() {
  	this.getProducts()
  		.subscribe((data) => { 
        	this.data = data;
      	});
  }

  public selectedProduct(productId) {
    this.product = productId;
  }

  updateCategoryFilter() {
    this.CategoriesFilter.currentIdCategory.subscribe((data) => { 
      this.idCategory = data;
    });
  }


}
 
 
  