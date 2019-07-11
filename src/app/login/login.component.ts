import { Component, OnInit } from '@angular/core';
import { ShopService } from '../utils/shop.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../utils/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {
  }

  changeOne()
  {
    document.getElementsByClassName("container")[0].classList.add("x");
    document.getElementsByClassName("container")[1].classList.remove("x");
  }
  changeTwo()
  {
    document.getElementsByClassName("container")[1].classList.add("x");
    document.getElementsByClassName("container")[0].classList.remove("x");
  }
  Onsubmit(login: NgForm) : void
  {
    console.log(login);
    
    // (data:any) => {
    //   console.log(data);
      
    // localStorage.clear();
    // localStorage.setItem("participant",JSON.stringify(data));
    // this.route.navigate(["/shop"])
    // }
  }
}
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
