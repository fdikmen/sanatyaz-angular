import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(
    private http : HttpClient
  ) { }

  addContact(data){
    return this.http.post<Contact[]>(this.apiUrl + 'contact',data).subscribe();
  }
}
