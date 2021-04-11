import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl='https://api.sanatyaz.com/api/';
  constructor(    
    private http: HttpClient
  ) { }

  addBlog(obj){
    return this.http.post<Blog[]>(this.apiUrl + 'blog',obj)
  }
  deleteBlog(id){
    return this.http.delete<Blog[]>(this.apiUrl + 'blog/' + id)
  }
  getBlog(){
    return this.http.get<Blog[]>(this.apiUrl + 'blog')
  }
  updateBlog(obj){
    return this.http.put<Blog[]>(this.apiUrl + 'blog',obj)
  }
  getBlogById(id){
    return this.http.get<Blog>(this.apiUrl + 'blog/getblogbyid/' + id);
  }
  getHomepage(){
    return this.http.get<Blog[]>(this.apiUrl + 'blog/gethomepage');
  }
}
