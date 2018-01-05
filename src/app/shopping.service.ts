import { Injectable } from '@angular/core';
import { ProductInterface } from './product.interface';

@Injectable()
export class ShoppingService {
  public shoppingCar: ProductInterface[] = [];
  constructor() {}

  public toggledProduct(product){
    const index = this.shoppingCar.findIndex(it => ( product.ndex === it.id ));
    if(index === -1){
      this.shoppingCar.push(product);
    } else {
      this.shoppingCar.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.shoppingCar));
  }

  public getLocalStorage() {
    if(localStorage.getItem('cart')){
      this.shoppingCar = JSON.parse(localStorage.getItem('cart'));
    }
  }
  
  public clearLocalStorage() {
    localStorage.removeItem('cart');
    this.shoppingCar = [];
  }
  
  getTotal(){
    const carPrice = this.shoppingCar.map((a) => {
      const priceA = a.price.replace('$','').replace(',','');
      return parseInt(priceA);
    });
    return carPrice.reduce((a, b) => a + b, 0);
  }


}
