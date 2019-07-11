import { Component, OnInit } from '@angular/core';
import { Products, products } from '../data';

@Component({ selector: 'app-shop', templateUrl: './shop.component.html', styleUrls: ['./shop.component.css'] })


export class ShopComponent implements OnInit {
  
  products = Products;

  selectedProduct: products;

  
  constructor() {}
  onSelect(product: products): void {
    this.selectedProduct = product;
    console.log(product);
    
  }
  ngOnInit() {
  }

}
