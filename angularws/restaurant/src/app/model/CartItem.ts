import { Product } from "./Product";

export class CartItem{
     id:number;
     name:string;
     price:number;
     quantity:number; 
    constructor( item:Product)
    {
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.quantity = 1;
    }
    
}