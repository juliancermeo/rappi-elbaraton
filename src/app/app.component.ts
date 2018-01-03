import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SortbyPipe } from './sortby.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  inputSearch: any;
  sortBy: any;
  order: string = "";

  search(search){
    this.inputSearch = search;
  }
  sortProducts(select) {
  	this.sortBy = select + this.order;
    console.log(this.sortBy);
  }

}
