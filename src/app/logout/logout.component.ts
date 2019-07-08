import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../utils/user.service';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../utils/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService , private router: Router , private outh: AuthService) { }

  ngOnInit() {
    // this.user.logout().subscribe(data => 
    //   {
    //     if(data.success)
    //     {
    //       this.router.navigate(["/home"])
    //       // this.auth.setLogin(false)
    //     } else {
    //       throw "problem loginout";
          
    //     }
    //   })
  }
  

}
