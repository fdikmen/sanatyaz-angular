import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Guid } from 'guid-typescript';
import { FormArchive } from 'src/app/models/formarchive.model';
import { FormElement } from 'src/app/models/formelement.model';
import { FormElementItem } from 'src/app/models/formelementitem.model';
import { MainForm } from 'src/app/models/mainform.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  forms!: MainForm[];
  formElementItem!: FormElementItem[];
  formArchives!: FormArchive[];
  formElement!: FormElement[];
  contactAddForm!: FormGroup;

  constructor(
    private formService: FormService,
    private fb: FormBuilder,
    private alertifyService:AlertifyService,
    private sanitizer:DomSanitizer
  ) { }

  createContactForm() {

    if (this.formElement !== undefined) {
      let contactAddForm = {}

      this.formElement.forEach(item => {
        if(item.isActive==true){
          if(item.isRequired==true){
            contactAddForm[item.text] = new FormControl("",Validators.required);
          }
          else{
            contactAddForm[item.text] = new FormControl("");
          }
        }
        
      })
      this.contactAddForm = new FormGroup(contactAddForm);

    }

  }

  ngOnInit(): void {
    this.getAllForm();
    this.getAllFormElement();
    this.getAllFormElementItem();

    this.createContactForm();

  }

  addFormArchive() {
    let newGuid = Guid.create().toString();


    if (this.contactAddForm.valid) {

      this.formArchives = Object.assign([{}], this.contactAddForm.value)
      
      var dizi:Array<string>=[]
      
      for (let fd of Object.keys(this.formArchives)) {
        dizi.push(this.formArchives[fd]);        
      }
      

      
        let i = 0;
        this.forms.forEach(item => {
          this.formElement.forEach(item2 => {
            if (item.id == item2.formId && item.isActive==true && item2.isActive==true) {
                 i=i+1;   
                
              this.formArchives.forEach(element => {             
   
                  element.content = dizi[i];
                  element.formElementId = item2.id;
                  element.formGuid = newGuid;
                  this.formService.addFormArchive(element);               

              })
              
            }
          })
        })
        this.alertifyService.success("Formunuz kayıt edildi.")
    }
  }

  
  getAllFormElement() {
    this.formService.getAllFormElement().subscribe(data => {
      this.formElement = data
      this.createContactForm();
    }
    );
  }
  getAllFormElementItem() {
    this.formService.getAllFormElementItem().subscribe(data => this.formElementItem = data);
  }
  // getAllForm() {
  //   this.formService.getAllForm().subscribe(data => this.forms = data);
  // }
  getAllForm() {
    this.formService.getAllForm().subscribe(data => {
      this.forms=data;
      this.forms.forEach(pro=>{
        pro.safeUrl=this.sanitizer.bypassSecurityTrustHtml(pro.content);
      })
    });
  }
  
}
