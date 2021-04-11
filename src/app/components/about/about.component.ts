import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about.model';
import { Purpose } from 'src/app/models/purpose.model';
import { AboutService } from 'src/app/services/about.service';
import { PurposeService } from 'src/app/services/purpose.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  abouts!:About[];
  purpose!:Purpose[];
  constructor(
    private aboutService:AboutService,
    private purposeService:PurposeService
  ) { }

  ngOnInit(): void {
    this.getAllAbout();
    this.getAllPurpose();    
  }

  getAllAbout(){
    this.aboutService.getAllAbout().subscribe(data=>this.abouts=data);
  }
  getAllPurpose(){
    this.purposeService.getAllPurpose().subscribe(data=>this.purpose=data);
  }
}
