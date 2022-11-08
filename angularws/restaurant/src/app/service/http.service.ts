import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getItemsByCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/items?category='+category);
  }
  getAllItems():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/items');
  }
}
