import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterPipe } from './../filter.pipe';
import { SortbyPipe } from './../sortby.pipe'; 


@Component({
  selector: 'order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();
  public change = null;


  constructor() { }

  ngOnInit() {
  }

  inputChange($event){
    this.search.emit($event);
    
  }

  selectChange($event){
    this.change = $event;
    this.select.emit(this.change);
    // console.log($event);
  }

}
