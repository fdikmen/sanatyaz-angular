import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  addMenu(obj){
    return this.http.post<Menu[]>( this.apiUrl +'menu' ,obj);
  }
  deleteMenu(id){
    return this.http.delete<Menu[]>(this.apiUrl + 'menu/'+ id);
  }
  getMenu(){
    return this.http.get<Menu[]>(this.apiUrl + 'menu');
  }
  updateMenu(obj){
    return this.http.put<Menu[]>(this.apiUrl + 'menu',obj);
  }
  getMainMenu(){
    return this.http.get<Menu[]>(this.apiUrl + 'menu/GetMainMenu');
  }
  getMenuById(id){
    return this.http.get<Menu>(this.apiUrl + 'menu/getmenubyid/'+ id);
  }
  getHomepage(){
    return this.http.get<Menu[]>(this.apiUrl + 'menu/gethomepage');
  }
  getSubmenu(){
    return this.http.get<Menu[]>(this.apiUrl + 'menu/getsubmenu');
  }
}
