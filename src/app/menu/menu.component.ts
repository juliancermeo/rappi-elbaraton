import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Input() showBasket: any = "Hide";
	@Input() show:boolean = false;

	constructor() { }

	ngOnInit() {
	}

	showBasketContainer() {

	    this.show = !this.show;

	    // CHANGE THE NAME OF THE BUTTON.
	    if(this.show) {
	    	this.showBasket = "Hide";
	  		console.log(this.showBasket);
	    } 
	      	
	    else{
	   		this.showBasket = "Show";
	  		console.log(this.showBasket);
	   	}
	  }

}
