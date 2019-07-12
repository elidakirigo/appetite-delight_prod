import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  selectedClass: string;
  public message = {text: ''};
  public suceed = {text: ''};
  public muserid: string;


  constructor(private firebaseAuth: AngularFireAuth, public route: Router) { this.user = firebaseAuth.authState; }

  public signup(email: string, password: string) {
    this.message = { text : 'validating...'};
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.message = { text : ''};
        this.suceed = { text : 'authenticated.'};
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
        if (user) {
          console.log(user);
          this.suceed = { text : 'authenticated.'};
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

