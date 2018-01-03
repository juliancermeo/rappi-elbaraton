import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilterPipe } from './../filter.pipe';


@Component({
  selector: 'order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
