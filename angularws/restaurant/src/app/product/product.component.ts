import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Product} from '../model/Product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product:Product;
  @Output()
  cartItem:EventEmitter<Product> = new EventEmitter();
  constructor() { 
    this.product={
      id: 1,
      name: "Ambur Biryani",
      category: "biryani",
      rating: 4.3,
      price: 13,
      img: "",
      quantity: 1,
      description:"Ambur biryani is a delightful one-pot meal with succulent pieces of meat cooked to perfection along with the aromatic jeera samba rice, mint leaves, coriander leaves and whole spices. The flavor and taste of meat is more dominant in Ambur biryani than the other ones due to the fewer spices used"
    }
  }

  ngOnInit(): void {
  }
  addToCart(prod:Product)
  {
    console.log(prod)
    this.cartItem.emit(prod)
  }

}
