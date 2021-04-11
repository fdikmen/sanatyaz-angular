import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from '../models/slider.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http:HttpClient) { }

  getAllSlider(){
    return this.http.get<Slider[]>(this.apiUrl + 'slider');
  }
  getSliderById(id){
    return this.http.get<Slider>(this.apiUrl + 'slider/' + id);
  }
}
