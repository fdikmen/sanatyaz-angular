import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Popup } from '../models/popup.model';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http:HttpClient
  ) { }

  getPopup(){
    return this.http.get<Popup[]>(this.apiUrl + "popup");
  }
}
