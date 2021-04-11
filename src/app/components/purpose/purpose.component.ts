import { Component, OnInit } from '@angular/core';
import { Purpose } from 'src/app/models/purpose.model';
import { PurposeService } from 'src/app/services/purpose.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit {

  purpose!:Purpose[];

  constructor(private purposeService:PurposeService) { }

  ngOnInit(): void {
    this.getAllPurpose();
  }

  getAllPurpose(){
    this.purposeService
    .getAllPurpose()
    .subscribe(data=>this.purpose=data);
  }
}
