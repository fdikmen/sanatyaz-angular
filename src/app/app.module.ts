import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
//import { CarouselModule } from 'ngx-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryComponent } from './components/category/category.component';
import { StatementComponent } from './components/statement/statement.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PersonelComponent } from './components/personel/personel.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { BlogComponent } from './components/blog/blog.component';
import { EbultenComponent } from './components/ebulten/ebulten.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './services/blog.service';
import { MenuService } from './services/menu.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CategoryService } from './services/category.service';
import { ConstantService } from './services/constant.service';
import { PersonelService } from './services/personel.service';
import { PromotionService } from './services/promotion.service';
import { PurposeService } from './services/purpose.service';
import { SliderService } from './services/slider.service';
import { StatementService } from './services/statement.service';
import { UserService } from './services/user.service';
import { PhotoComponent } from './components/photo/photo.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { PurposeDetailComponent } from './components/purpose-detail/purpose-detail.component';
import { PromotionDetailComponent } from './components/promotion-detail/promotion-detail.component';
import { SliderDetailComponent } from './components/slider-detail/slider-detail.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlertifyService } from './services/alertify.service';
import { OrderbyPipe } from './orderby.pipe';
import { PopupComponent } from './components/popup/popup.component';
import { AboutService } from './services/about.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { InstagrambandComponent } from './components/instagramband/instagramband.component';
import { SearchPipe } from './search.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';





// import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,    
    CategoryComponent,
    StatementComponent,
    PromotionComponent,
    PersonelComponent,
    PurposeComponent,
    BlogComponent,
    EbultenComponent,
    PortfolioComponent,
    PhotoComponent,
    BlogDetailComponent,
    PurposeDetailComponent,
    PromotionDetailComponent,
    SliderDetailComponent,
    MenuDetailComponent,
    AboutComponent,
    ContactComponent,
    OrderbyPipe,
    PopupComponent,
    FormComponent,
    BlogsComponent,
    InstagrambandComponent,
    SearchPipe,
    
    
  ],
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatMenuModule,
   // NgbModule
    CommonModule,
    Ng2SearchPipeModule 
    // YouTubePlayerModule
    //OrderModule
  ],
  providers: [
    BlogService,
    AboutService,
    MenuService,
    CategoryService,
    ConstantService,
    PersonelService,
    PromotionService,
    PurposeService,
    SliderService,
    StatementService,
    UserService,
    AlertifyService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[PopupComponent]
})
export class AppModule { }
