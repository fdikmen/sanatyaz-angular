import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { FormArchive } from '../models/formarchive.model';
import { FormElement } from '../models/formelement.model';
import { FormElementItem } from '../models/formelementitem.model';
import { MainForm } from '../models/mainform.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http:HttpClient
  ) { }

  getAllForm(){
    return this.http.get<MainForm[]>(this.apiUrl + "form");
  }
  getAllFormElement(){
    return this.http.get<FormElement[]>(this.apiUrl + "formelement");
  }
  getAllFormElementItem(){
    return this.http.get<FormElementItem[]>(this.apiUrl + "formelementitem");
  }
  addFormArchive(formArchives){
    return this.http.post<FormArchive[]>(this.apiUrl+"formarchive",formArchives).subscribe();
  }
}
