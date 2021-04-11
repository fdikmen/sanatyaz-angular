import { Component, OnInit } from '@angular/core';
import { PhotoGallery } from 'src/app/models/photogallery.model';
import { PhotogalleryService } from 'src/app/services/photogallery.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photoGalleries!:PhotoGallery[];

  constructor(private photoGalleryService: PhotogalleryService) { }

  ngOnInit(): void {
    this.getAllPhotoGallery();
  }

  getAllPhotoGallery(){
    this.photoGalleryService
    .getAllPhotoGallery()
    .subscribe(data=>this.photoGalleries=data);    
  }
}
