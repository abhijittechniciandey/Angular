import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';
import { foodItem } from '../database/data';
import { CartItem } from '../model/CartItem';
import { Product } from '../model/Product';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnChanges {

  @Input()
  category:string='Starter'
  @Output()
  //cartItem:Product = {};
  products:Product[]
  constructor(private hs : HttpService, private cs:CartService) { 
    this.products=[]
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("category changes",this.category)
    this.hs.getItemsByCategory(this.category).subscribe(data=>{
      this.products = data
    })
  }

  ngOnInit(): void {
    this.hs.getItemsByCategory(this.category).subscribe(data=>{
      this.products = data
    })
    
    console.log("category on init",this.category)
  }

  addToCart(e:Product){
    console.log(e.id);
    this.cs.addToCart(new CartItem(e));
  }
  
}
