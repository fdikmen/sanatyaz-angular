import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CreatePage } from 'src/app/models/create-page.model';
import { Menu } from 'src/app/models/menu.model';
import { CreatePageService } from 'src/app/services/create-page.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
  providers:[MenuService]
})
export class MenuDetailComponent implements OnInit {

  menuDetail!:Menu;
  page!:CreatePage[];
  
  constructor(
    private activetedRoute:ActivatedRoute,
    private menuService:MenuService,
    private createPageService:CreatePageService,
    private sanitizer:DomSanitizer  
    ) { }
  

  ngOnInit(): void {
      
      this.activetedRoute.params.subscribe(params=>{
        if(params["id"] != undefined){
          this.getMenuById(params["id"])               

        }
      });
      
    
    
    this.getAllCreatePage();
  }

  getMenuById(id){
    this.menuService.getMenuById(id).subscribe(data=>{
      this.menuDetail=data      
    });
  }

  
  getAllCreatePage(){
    this.createPageService.getAllCreatePage().subscribe(data=>{
      this.page=data
      this.page.forEach(pro=>{
        pro.safeContent=this.sanitizer.bypassSecurityTrustHtml(pro.content);
      })
    });
  }
}
