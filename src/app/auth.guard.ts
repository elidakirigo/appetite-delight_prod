import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './utils/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  user = null;

  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      // firebase.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     return true;
      //   }
      //   this.router.navigate(['/login']);
      //   return false;
      // });

      this.user = this.authService.newUser;
      console.log(this.user, 'user');

      if (this.user != null) {
      return true;
  }
      this.router.navigate(['/login']);
      return false;
  }
}
