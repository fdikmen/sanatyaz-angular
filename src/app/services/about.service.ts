import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http:HttpClient
  ) { }

  getAllAbout(){
    return this.http.get<About[]>(this.apiUrl + "about");
  }
}
