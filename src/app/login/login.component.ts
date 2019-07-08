import { Component, OnInit } from '@angular/core';
import { ShopService } from '../utils/shop.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  route: any;
  constructor(private shopService : ShopService) { }

  ngOnInit() {
  }

  Onsubmit(login: NgForm) : void
  {
    console.log(login);
    
    (data:any) => {
      console.log(data);
      
    localStorage.clear();
    localStorage.setItem("participant",JSON.stringify(data));
    this.route.navigate(["/shop"])
    }
  }
}
