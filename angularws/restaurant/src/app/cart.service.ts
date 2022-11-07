import { Injectable } from '@angular/core';
import { CartItem } from './model/CartItem';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:CartItem[];

  constructor() { 
    this.cartItems = [];
  }
  addToCart(item:CartItem)
  {
    let existingItem = false;
    let itemInCart = this.cartItems.find(citem=>item.id === citem.id )
    if(itemInCart !== undefined)
      itemInCart.quantity++;
    else
      this.cartItems.push(item);
      console.log(this.cartItems)
  }
}
