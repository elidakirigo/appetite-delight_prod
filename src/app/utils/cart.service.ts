import { Injectable } from '@angular/core';
import { products } from '../data';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  newProduct: products[] = [];
  items: products[];
  database: any;

  constructor() { }

  addCart(item: products) {
    this.database = firebase.database();
    this.database.ref().push().set(item);

    this.database.ref().child('user').on('child_added', function(returnProduct: any) {
      this.newProduct = returnProduct.val();
    });
  }
  remove() {
    this.database.ref().child('user').on('child_remove', function(returnProduct: any) {
      this.newProduct = returnProduct.val();
    });
  }
}
