import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  jwtHelper = new JwtHelperService();
  token:any;
  constructor(
    public auth: AuthService,public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    let userTypedata = route.data.userType as Array<string>;
    console.log(userTypedata);
    
 
    
     this.token = localStorage.getItem('token')
    const tokenPayLoad = this.jwtHelper.decodeToken(this.token)
    console.log(tokenPayLoad.userType);


//||tokenPayLoad.userType !==
    if (!this.auth.loggedIn || !(userTypedata.includes(tokenPayLoad.userType)) ) {
     
        alert("no permission");
        return false
        
     
      
      
    }
    
console.log("INSIDE ROLE GUARD");

    return true  
      //   let Role = localStorage.getItem("userType");
      //   if(Role == "Admin"){
      //     return true;
      //   }
      //   alert("no permission");
      //   return false;
    
      }
  
  
}
