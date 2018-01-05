import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Input() showBasket: any = "Hide";
	@Input() show:boolean = false;

	@Output() ShowCart = new EventEmitter();

	constructor() { }

	ngOnInit() {

	}

	showBasketContainer():void {

	    this.show = !this.show;

	    if(this.show) {
	    	this.showBasket = "Hide";
	  		this.ShowCart.emit(this.showBasket);
	    } 
	      	
	    else{
	   		this.showBasket = "Show";
	  		this.ShowCart.emit(this.showBasket);
	   	}
	  }

}
