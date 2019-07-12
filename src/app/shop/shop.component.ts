import { Component, OnInit } from '@angular/core';
import { ShopService } from '../utils/shop.service';
import { products } from '../data';
import { Router } from '@angular/router';
import { CartService } from '../utils/cart.service';
import { of } from 'rxjs';
import { AuthService } from '../utils/auth.service';

@Component({ selector: 'app-shop', templateUrl: './shop.component.html', styleUrls: ['./shop.component.css'] })


export class ShopComponent implements OnInit {

    products: products[];

  constructor(private authService: AuthService ,
              private shopService: ShopService ,
              public router: Router,
              private cartService: CartService) {}


  onSelect(product: products ) {
    this.cartService.addCart(product);
    this.router.navigate(['/login']);
    console.log(product);

  //  this.router.navigate(["/cart"])

  }


  getProducts(): void {
    this.products = this.shopService.getProducts();
  }
  ngOnInit() {
    this.getProducts();
  }

}
