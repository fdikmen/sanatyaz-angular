import { Component, OnInit, ɵConsole } from '@angular/core';
import { Constant } from 'src/app/models/constant.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ConstantService } from 'src/app/services/constant.service';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constant!: Constant[];
  contact!:Contact;
  contactForm!:FormGroup;


  constructor(
    private contactService  :ContactService,
    private constantService :ConstantService,
    private fb: FormBuilder,
    private alertifyService:AlertifyService
  ) { }

  createContactForm(){
    {
      this.contactForm = this.fb.group(
        {
          name:["",Validators.required],
          surname:["",Validators.required],
          text:["",Validators.required],
          email:["",[Validators.required,Validators.email]]
        })      
    }
  }

  ngOnInit(): void {
    this.getAllConstant(); 
    this.createContactForm();
  }  

  getAllConstant() {
    this.constantService.getAllConstant().subscribe(data => this.constant = data);
  }
  
  addContact(){
    if(this.contactForm.valid){
      this.contact=Object.assign({},this.contactForm.value)
      this.contactService.addContact(this.contact);      
      this.alertifyService.success("Formunuz gönderildi.")
    }
  }
}
