import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from './users/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
loggedIn:boolean=false;
  constructor(private servicio:UsersService,private cookies:CookieService) { }
  isAutenticated():any{
    const promise=new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn)
        },800);
      }
    );
    return promise;
  }
  login(usuario:string,pass:string):void{
    // Si lo pides por un email, no te hace falta preguntar por el usuario
    this.servicio.getUserName(usuario)
    .subscribe({
      next:(resp)=> {
        console.log(resp[0].name);
        if (resp.length && resp[0].name===pass){
            //Con localStorage
            // localStorage.setItem('login','true')
            this.cookies.set('login','true');
            this.cookies.set('rol',resp[0].rol);
            this.loggedIn=true
          }
      },
      
    })
    
    
  }
  logout():void{
    this.loggedIn=false
    localStorage.setItem('login','false')
    this.cookies.set('login','false')
  }
}
