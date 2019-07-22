import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,
              public carService: CartService,
              public route: Router) { this.user = firebaseAuth.authState; }
  user: Observable<firebase.User>;
  selectedClass: string;
  public message = {text: ''};
  public muserid: string;
  public database: any;
  public ref: any;
  public data: any;
  newUser = null;

  mydatabase() {
    this.database = firebase.database();
    this.ref = this.database.ref('user');

    this.data = this.carService.items;
    this.ref.push(this.data);
  }

  public signup(email: string, password: string) {
    this.message = { text : 'validating...'};
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.newUser = 'vc';
        this.message = { text : ''};
        this.route.navigate(['/shop']);
        console.log('Success!', value);
      })
      .catch(err => {
        this.message = { text : 'the server is experiencing some technical errors,please check on your connectivity'};
        console.log('Something went wrong:', err.message);
        this.route.navigate(['/login']);
      });
  }

  public login(email: string, password: string) {
    this.message = { text : 'validating...'};
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.newUser = user;
        if (user) {
          this.route.navigate(['/shop']); }
      })

      .catch(err => {
        this.message = { text : 'Invalid Email/Password.PLease try again'};
        this.route.navigate(['/login']);
      });
  }

  public logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.route.navigate(['/home']);
  }

}

