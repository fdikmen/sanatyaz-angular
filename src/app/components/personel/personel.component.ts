import { Component, OnInit } from '@angular/core';
import { Personel } from 'src/app/models/personel.model';
import { PersonelService } from 'src/app/services/personel.service';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss']
})
export class PersonelComponent implements OnInit {

  personels!:Personel[];
  
  constructor(private personelService: PersonelService) { }

  ngOnInit(): void {
    this.getAllPersonel();
  }

  getAllPersonel(){
    this.personelService
    .getAllPersonel()
    .subscribe(data=>this.personels=data);
  }
}
