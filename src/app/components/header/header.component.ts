import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu.model';
import { ConstantService } from 'src/app/services/constant.service';
import { Constant } from 'src/app/models/constant.model';
import { PopupService } from 'src/app/services/popup.service';
import { Popup } from 'src/app/models/popup.model';
import { FormService } from 'src/app/services/form.service';
import { Form } from '@angular/forms';
import { MainForm } from 'src/app/models/mainform.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';
import { Promotion } from 'src/app/models/promotion.model';
import { PromotionService } from 'src/app/services/promotion.service';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

//import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus!:Menu[];
  mainMenu!:Menu[];
  subMenu!:Menu[];
  constant!:Constant[];
  popups!:Popup[];
  form!:MainForm[];  
  promotion!:Promotion[];
  blogs!: Blog[];
  
  searchText;

  constructor(
    private menuService:MenuService,
    private constantService:ConstantService,
    private formService:FormService,
    private promotionService:PromotionService,
    private blogService: BlogService
  ) { }
   

  

  ngOnInit(): void {
    this.getMenu();
    this.getConstant();
    this.getMainMenu();
    this.getAllForm();
    this.getAllPromotion();
    this.getHomepage();
  }
  getHomepage(){
    this.blogService
    .getHomepage()
    .subscribe(data=>this.blogs=data);
  }
  getAllPromotion(){
    this.promotionService
    .getAllPromotion()
    .subscribe(data=>{
      this.promotion=data;      
    });
  }
  getMenu(){
    this.menuService
    .getMenu()
    .subscribe(data=>this.menus=data);     
  }
  getMainMenu(){
    this.menuService
    .getMainMenu()
    .subscribe(data=>this.mainMenu=data);
  }
  getConstant(){
    this.constantService
    .getAllConstant()
    .subscribe(data=>this.constant=data);
  }
  getSubmenu(){
    this.menuService.getSubmenu().subscribe(data=>this.subMenu=data);
  }
  getAllForm(){
    this.formService.getAllForm().subscribe(data=>this.form=data);    
  }

}
