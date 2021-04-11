import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/models/constant.model';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constant!:Constant[];

  constructor(private constantService: ConstantService) { }

  ngOnInit(): void {
    this.getAllConstant();
  }


  getAllConstant(){
    this.constantService
    .getAllConstant()
    .subscribe(data=>this.constant=data);
  }
}
