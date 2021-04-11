import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio!:Menu[];
  detail!:Menu;
  homepage!:Menu[];

  constructor(
    private menuService: MenuService,
    private activetedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllMenu();
    this.getHomepage();

    this.activetedRoute.params.subscribe(params=>{
      this.getDetail(params["id"])
    });
  }

  getAllMenu(){
    this.menuService
    .getMenu()
    .subscribe(data=>this.portfolio=data);
  }

  getDetail(id){
    this.menuService.getMenuById(id).subscribe(data=>this.detail=data);
  }

  getHomepage(){
    this.menuService.getHomepage().subscribe(data=>this.homepage=data);
  }
}
