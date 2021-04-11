import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Promotion } from 'src/app/models/promotion.model';
import { PromotionService } from 'src/app/services/promotion.service';



@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.scss']
})
export class PromotionDetailComponent implements OnInit {

  promotionDetail!:Promotion;

 

  constructor(
    private activetedRoute:ActivatedRoute,
    private promotionService:PromotionService
  ) { }

  ngOnInit(): void {
    // this.activetedRoute.params.subscribe(params=>{
    //   this.getPromotionById(params["id"]);
    // })
    this.getPromotionById();
    
  }

// getPromotionById(id){
//   this.promotionService.getPromotionById(id).subscribe(data=>this.promotionDetail=data);
// }


getPromotionById() {
  
  const proId  = this.activetedRoute.snapshot.paramMap.get('id');
  var id=Number(proId);  
  this.promotionService.getPromotionById(id)
    .subscribe(data=>this.promotionDetail = data);
}
}
