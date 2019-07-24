import { Component, OnInit } from '@angular/core';
import { ShopService } from '../utils/shop.service';
import { products } from '../data';
import { Router } from '@angular/router';
import { CartService } from '../utils/cart.service';
import { AuthService } from '../utils/auth.service';

@Component({ selector: 'app-shop', templateUrl: './shop.component.html', styleUrls: ['./shop.component.css'] })


export class ShopComponent implements OnInit {

    products: products[];
    user = null;

  constructor(private authService: AuthService ,
              private shopService: ShopService ,
              public router: Router,
              private cartService: CartService) {}


  onSelect(product: products ): void {
    this.user = this.authService.newUser;
    console.log( this.user);

    if (this.user != null) {
      console.log(product);
      this.cartService.addCart(product);

    } else {
      this.router.navigate(['/login']);
    }
  }

  getProducts(): void {
    this.products = this.shopService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
