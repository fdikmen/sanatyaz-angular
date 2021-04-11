import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'src/app/models/slider.model';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider-detail',
  templateUrl: './slider-detail.component.html',
  styleUrls: ['./slider-detail.component.scss']
})
export class SliderDetailComponent implements OnInit {

  sliderDetail!:Slider;
  constructor(
    private activetedRoute:ActivatedRoute,
    private sliderService:SliderService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      this.getSliderById(params["id"]);
    })
  }

  getSliderById(id){
    this.sliderService.getSliderById(id).subscribe(data=>{
      this.sliderDetail=data
      this.sliderDetail.safeContent=this.sanitizer.bypassSecurityTrustHtml(this.sliderDetail.sliderText)
    });
  }
}
