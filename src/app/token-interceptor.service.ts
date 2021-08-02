import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
//TO send the token along with the next REQ FROM THE CLIENT FOR THE SAME SESSON-HttpINTERCEPTOR is used
  constructor(private injector:Injector) { }
  intercept(req:any,next:any){

    let authservice = this.injector.get(AuthService) //GETTING AN INSTANCE OF AUTHSERVICE
    //CLONE THE HTTP REQUEST IMP
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authservice.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)

  
  }
}
