import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statement } from '../models/statement.model';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(private http:HttpClient) { }

  getAllStatement(){
    return this.http.get<Statement[]>(this.apiUrl + 'statement');
  }
}
