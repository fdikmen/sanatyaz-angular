import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Purpose } from 'src/app/models/purpose.model';
import { PurposeService } from 'src/app/services/purpose.service';

@Component({
  selector: 'app-purpose-detail',
  templateUrl: './purpose-detail.component.html',
  styleUrls: ['./purpose-detail.component.scss'],
  providers:[PurposeService]
})
export class PurposeDetailComponent implements OnInit {

  purposeDetail!:Purpose;
  
  constructor(
    private purposeService:PurposeService,
    private activetedRoute:ActivatedRoute,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      this.getPurposeById(params["id"]);
    })
  }

  getPurposeById(id){
    this.purposeService.getPurposeById(id).subscribe(data=>{
      this.purposeDetail=data
      this.purposeDetail.safeContent=this.sanitizer.bypassSecurityTrustHtml(this.purposeDetail.content)      
    });
  }
}
