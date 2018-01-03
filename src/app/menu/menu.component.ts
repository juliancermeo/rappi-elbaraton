import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	@Input() showBasket: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	showBasketContainer(){
		this.showBasket = true;
		console.log(this.showBasket);
	}

}
