import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purpose } from '../models/purpose.model';

@Injectable({
  providedIn: 'root'
})
export class PurposeService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http: HttpClient) { }

  getAllPurpose(){
    return this.http.get<Purpose[]>(this.apiUrl + 'purpose');
  }
  getPurposeById(id){
    return this.http.get<Purpose>(this.apiUrl+"purpose/getpurposebyid/"+id);
  }
}
