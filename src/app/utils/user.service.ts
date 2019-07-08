import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

interface IsLogin 
{
  status:boolean
}
interface logoutStatus
{
  status:boolean
}
  
  @Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  // isLogin() : Observable<IsLogin>
  // {
  //   // return this.http.get<isLogin>("/api/islogin.php")
  // }
  // logout()
  // {
  //   return this.http.get<logoutStatus>("/api/logout.php")
  // }
}
