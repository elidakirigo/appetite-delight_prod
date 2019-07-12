import { Injectable } from '@angular/core';
import { products } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  newProduct: products[] = [];
  items: products[];



  constructor() { }

  addCart(item: products) {
   this.newProduct.push(item);
   this.items = this.newProduct;
  }

}
