import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../models/constant.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http: HttpClient) { }

  getAllConstant(){
    return this.http.get<Constant[]>(this.apiUrl + 'constant');
  }
}
