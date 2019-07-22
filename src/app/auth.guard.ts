import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from './utils/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  user = null;

  constructor(private router: Router, private authService: AuthService,
              private firebaseAuth: AngularFireAuth) { }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      this.user = this.authService.newUser;
      console.log(this.user,'user');

      if (this.user != null) {
      return true;
  }
      this.router.navigate(['/login']);
      return false;
  }
}
