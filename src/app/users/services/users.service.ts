import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/servers/interfaces/client.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }
  getUserName(pass:string):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?email=${pass}`)
  }
}
