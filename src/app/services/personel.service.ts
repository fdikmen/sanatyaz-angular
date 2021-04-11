import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../models/personel.model';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http:HttpClient) { }

  getAllPersonel(){
    return this.http.get<Personel[]>(this.apiUrl + 'personel');
  }
}
