import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class CourseGuardService implements CanActivateChild{
 constructor(private authService: AuthService,private router: Router){

 }
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
//  }   

 canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
   // return this.canActivate(childRoute,state);
   if(this.authService.isAuthenticated()){
      return true;
   }else{
this.router.navigate([''])
return false;
   }
 }
}