import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PromotionDetailComponent } from './components/promotion-detail/promotion-detail.component';
import { PurposeDetailComponent } from './components/purpose-detail/purpose-detail.component';
import { SliderDetailComponent } from './components/slider-detail/slider-detail.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },  
  {
    path:"galeri", component: GalleryComponent
  },
  {
    path:"hakkımızda", component: AboutComponent
  },
  {
    path:"iletişim", component: ContactComponent
  },
  {
    path:"form", component: FormComponent
  },
  {
    path:"blogs", component: BlogsComponent
  },
  {
    path:"photo", component: PhotoComponent
  },
  {
    path:"galleryDetail/:id", component: GalleryComponent
  },  
  {
    path:"blogDetail/:id",component:BlogDetailComponent
  },
  {
    path:"purposeDetail/:id",component:PurposeDetailComponent
  },
  {
    path:"promotiondetail/:id",component:PromotionDetailComponent
  },
  {
    path:"sliderDetail/:id",component:SliderDetailComponent
  },
  {
    path:"menuDetail/:id",component:MenuDetailComponent
  },
  //düzenlenecek-----
  {
    path:"detail/:id",component:PortfolioComponent
  },
  //-----------------------------------
  {
    path:"**", component: HomeComponent
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
