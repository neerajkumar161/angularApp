import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
      address: ['',[
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
  get address(){
    return this.myForm.get('address');
  }

}
