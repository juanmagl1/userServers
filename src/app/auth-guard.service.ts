import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {
  constructor(private router: Router,private authService:AuthServiceService,private cookie:CookieService) { }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(route, state);
  }
  canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    // return this.authService.isAutenticated()
    // .then(
    //   (authenticated: boolean) => {
    //     if (authenticated) {
    //       return true;
    //     } else {
    //       return this.router.navigate(['/']);
    //     }
    //   }
    // );
    //------------------------------------
    //Recuperamos el valor con localStorage
    // if (localStorage.getItem('login')==='true')
    //   return true
    // else
    //   return this.router.navigate(['/']);

    //-------------------

    //Recuperamos el valor con cookies
    if (this.cookie.get('login')==='true'&& this.cookie.get('rol')==='ADMIN'){
      return true
      
    }
    else
      return this.router.navigate(['/']);
  } 
 
}
