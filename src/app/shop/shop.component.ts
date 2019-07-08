import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  image:string;
  img : string ;
  cost:number;
  name:string;
 
  constructor() { 
    

    // this.image  = document.querySelector(img);
    // this.cost  = document.querySelector(h5);
    // this.name  = document.querySelector(h5);

  }

  ngOnInit() {
  }

}
