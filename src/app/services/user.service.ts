import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http:HttpClient) { }

  getAllUser(){
    return this.http.get<User[]>(this.apiUrl + 'user');
  }

  addUser(user){
    return this.http.post<User[]>(this.apiUrl + 'user',user).subscribe();    
  }
}
