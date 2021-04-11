import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http:HttpClient) { }

  getAllPromotion(){
    return this.http.get<Promotion[]>(this.apiUrl + 'promotion');
  }
  getPromotionById(id):Observable<Promotion>{
    return this.http.get<Promotion>(this.apiUrl + 'promotion/getpromotionbyid/'+ id);
  }
  
  
}
