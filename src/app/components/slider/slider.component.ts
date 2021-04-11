import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/models/slider.model';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
  
})
export class SliderComponent implements OnInit {

  sliders!:Slider[];
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getAllSlider();    
  }

  getAllSlider(){
    this.sliderService
    .getAllSlider()
    .subscribe(data=>this.sliders=data);
  }

  // upcoming_events =  this.sliders.filter( event => 
  // event.order > 10000000);
  // past_events = this.sliders.filter(event => event.order < 1000000);



  
}
