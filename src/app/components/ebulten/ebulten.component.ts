import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-ebulten',
  templateUrl: './ebulten.component.html',
  styleUrls: ['./ebulten.component.scss']
})
export class EbultenComponent implements OnInit { 

  constructor(
    private userService: UserService,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService
    ) { }

    user!: User;
    userAddForm!:FormGroup;

  createUserForm(){
    this.userAddForm=this.formBuilder.group({
      eMail:["",[Validators.required,Validators.email] ]
    })
  }

  ngOnInit(): void {
    this.createUserForm();
  }


  addUser() {
    if(this.userAddForm.valid){
      this.user=Object.assign({},this.userAddForm.value)      
      this.userService.addUser(this.user);
      this.alertifyService.success("E-bültene başarıyla kayıt oldunuz.")
    }
  }
}
