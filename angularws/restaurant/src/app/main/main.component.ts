import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  category:string ="Starter"
  showCart:boolean = false;
  constructor(public cs:CartService) { }

  ngOnInit(): void {
    console.log("category ",this.category)
  }

  displayCart()
  {
    this.showCart = !this.showCart;
  }
}
