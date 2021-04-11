import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Promotion } from 'src/app/models/promotion.model';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotion!:Promotion[];
  
  constructor(    
    private promotionService:PromotionService,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getAllPromotion();
  }
  

  getAllPromotion(){
    this.promotionService
    .getAllPromotion()
    .subscribe(data=>{
      this.promotion=data;
      this.promotion.forEach(pro=>{
        pro.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(pro.mediaUrl);
      });
    });
  }
}
