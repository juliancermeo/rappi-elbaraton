import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart = [];

  constructor() { }

  ngOnInit() {
  }

}
