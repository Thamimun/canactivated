import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Authservice } from '../authservice/authservice.component';

@Injectable({
providedIn:'root'
})
export class AuthGuardservice implements CanActivate {
 
  constructor(private auth:Authservice,private route:Router) { }
  
canActivate(
route:ActivatedRouteSnapshot,
state:RouterStateSnapshot
):boolean{ 
  if(this.auth.loggedIn()){
    return true;
  }else{
    this.route.navigate(['/login']);
    return false
  }
  
}

}
