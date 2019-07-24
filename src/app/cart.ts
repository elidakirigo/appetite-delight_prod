import { ShopComponent } from './shop/shop.component';

export class MyCart {
    img: object;
    name: string;
    type: string;
    cost: number;
    totalCost: number;

    constructor() {
      this.img = Image;
    }

  }

export const CARTS: MyCart[] = [
    {img : Image, name : 'elida', type : 'undefined' , cost : 30.00 , totalCost: 45.00}
];
