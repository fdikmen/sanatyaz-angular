import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Popup } from 'src/app/models/popup.model';
import { PopupService } from 'src/app/services/popup.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})


export class PopupComponent implements OnInit {  

  popups! : Popup[];


  constructor(
    private dialog:MatDialog,
    private popupService:PopupService,
    private sanitizer:DomSanitizer
    
  ) { }
  
  ngOnInit(): void {
   
    this.getPopup();
  }  
  
  getPopup(){
    this.popupService.getPopup().subscribe(data=>{
      this.popups=data
      this.popups.forEach(pro=>{
        pro.safeContent=this.sanitizer.bypassSecurityTrustHtml(pro.text)
      })
    });
  }
}
