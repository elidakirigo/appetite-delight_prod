import { Injectable } from '@angular/core';
import { products ,Products } from "../data"

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getProducts(): products[] {
    return Products;
  }
}
