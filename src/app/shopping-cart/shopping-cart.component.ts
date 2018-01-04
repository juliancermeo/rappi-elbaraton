import { Component, OnInit, Input, Output } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart = [];

  constructor(private Shopping: ShoppingService) { }

  ngOnInit() {
  }


  public emptyCart(): void {
    this.Shopping.clearLocalStorage();
  }

}
