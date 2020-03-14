import { NewService } from './../services/new.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// public mytext:string=''
myForm : FormGroup;
userList: any;
constructor(
  private fb: FormBuilder,
  private newService: NewService
  ) { }

ngOnInit() {
  this.myForm = this.fb.group({
    email: ['',[
        Validators.required,
        Validators.email
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(5)
    ]]
  });
  
}

get email(){ 
  return this.myForm.get('email');
}
get password(){
  return this.myForm.get('password');
}

}