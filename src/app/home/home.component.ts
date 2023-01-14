import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth.service.service';
import { UsersService } from '../users/services/users.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:['#logout{margin:3%;}']
})
export class HomeComponent implements OnInit {
loguearse:boolean=false;
usuario!:string;
password!:string;
  constructor(private servicio:UsersService,private authService:AuthServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
   
  }
mostrarBoton():void{
  if (!this.loguearse){
    this.loguearse=true
  }else {
    this.loguearse=false
  }
}
login():void{
    this.authService.login(this.usuario,this.password);
}
logout():void{
  this.authService.logout()
}
}
