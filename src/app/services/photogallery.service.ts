import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoGallery } from '../models/photogallery.model';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {

  apiUrl='https://api.sanatyaz.com/api/';

  constructor(private http:HttpClient) { }

  getAllPhotoGallery(){    
    return this.http.get<PhotoGallery[]>(this.apiUrl + "photogallery");
  }
}
