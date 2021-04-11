import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoCategory } from 'src/app/models/photocategory.model';
import { PhotoGallery } from 'src/app/models/photogallery.model';
import { PhotocategoryService } from 'src/app/services/photocategory.service';
import { PhotogalleryService } from 'src/app/services/photogallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']

})
export class GalleryComponent implements OnInit {

  photoCategories!:PhotoCategory[];
  photoGalleries!:PhotoGallery[];
  photoCategory!:PhotoCategory;

  constructor(
    private activetedRoute:ActivatedRoute,
    private photoCategoryService:PhotocategoryService,
    private photoGalleryService:PhotogalleryService
  ) { }

  ngOnInit(): void {
    this.getAllPhotoCategory();
    this.getAllPhotoGallery();    
    
    this.activetedRoute.params.subscribe(params=>{
      if(params["id"] != undefined){
        this.getPhotoCategoryById(params["id"]) 

      }
    })
  }

  getAllPhotoCategory(){
    this.photoCategoryService
    .getAllPhotoCategory()
    .subscribe(data=>this.photoCategories=data);
  }
  getAllPhotoGallery(){
    this.photoGalleryService
    .getAllPhotoGallery()
    .subscribe(data=>this.photoGalleries=data);
  }
  getPhotoCategoryById(id){
    this.photoCategoryService
    .getPhotoCategoryById(id)
    .subscribe(data=>this.photoCategory=data);   

  }
}


