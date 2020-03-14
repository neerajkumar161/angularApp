import { NewService } from './../../services/new.service';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  serverResponse: any;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private newService: NewService
    ) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      firstname: ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      lastname: ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
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
  
  get firstname(){
    return this.myForm.get('firstname');
  }
  get lastname(){
    return this.myForm.get('lastname');
  }
  get email(){
    return this.myForm.get('email');
  }
  get password(){
    return this.myForm.get('password');
  }
  // When user submit the form
  onClick(){ 
    let formData = this.myForm.value; 
    console.log(formData.firstname);
    var userData = {
      firstName: formData.firstname, 
      lastName: formData.lastname,
      email: formData.email,
      password: formData.password
    }
    this.newService.addUser(userData)
    .subscribe(res => {
      alert(res.message);
      this.serverResponse = res.message;
    })
  }
}
