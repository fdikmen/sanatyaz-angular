import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoCategory } from '../models/photocategory.model';

@Injectable({
  providedIn: 'root'
})
export class PhotocategoryService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(private http:HttpClient) { }

  getAllPhotoCategory(){      
    return this.http.get<PhotoCategory[]>(this.apiUrl + "photocategory");
  }

  getPhotoCategoryById(id){
    return this.http.get<PhotoCategory>(this.apiUrl + "photocategory/getphotocategorybyid/" + id);
  }
}
