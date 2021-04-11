import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<Category[]>(this.apiUrl + 'category');
  }
  addCategory(obj){
    return this.http.post<Category[]>(this.apiUrl + 'category',obj);
  }
  deleteCategory(id){
    return this.http.delete<Category[]>(this.apiUrl + 'category/' + id);
  }
  updateCategory(obj){
    return this.http.put<Category[]>(this.apiUrl + 'category',obj);
  }
}
