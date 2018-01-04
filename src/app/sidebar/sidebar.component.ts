import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SortbyPipe } from './../sortby.pipe'; 
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  
	public panelOpenState: boolean = false;
	private apiUrl = "./../assets/data/categories.json";
	public data: any = {};
  public max: any = 100;
  public min: any = 0;
  public checked: boolean = false;


  constructor(private http: Http) { }

  ngOnInit() {
  	this.getCategories();
  	this.getCategoryList();
  }

  public getCategories() {
    return this.http.get(this.apiUrl)
    	.map((res: Response) => res.json())
      
  }

  public getCategoryList() {
  	this.getCategories()
  		.subscribe((data) => {
        	this.data = data;
      	});

  }

  public verifychecked(value) {
    this.checked = value;
    console.log(value);
  }


    


}