import { Component, OnInit } from '@angular/core';
import { ShopService } from "../utils/shop.service";

@Component({ selector: 'app-cart', templateUrl: './cart.component.html', styleUrls: ['./cart.component.css'] })

export class CartComponent implements OnInit {

  // product : products[];

  constructor(private productService : ShopService) 
  {
    
   }
  // getProducts() : void 
  //     {
  //       this.product = this.ShopService.getProducts();
  //     }
  ngOnInit() {}
}