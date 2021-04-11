import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePage } from '../models/create-page.model';

@Injectable({
  providedIn: 'root'
})
export class CreatePageService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http:HttpClient
  ) { }

  getAllCreatePage(){
    return this.http.get<CreatePage[]>(this.apiUrl + 'createpage');
  }
}
