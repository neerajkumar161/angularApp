import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NewService } from './../services/new.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private newService: NewService,
    private router: Router,
    private toastr: ToastrService
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

  registerUser(){
    var formData = this.myForm.value;
    var regData = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      password: formData.password 
    }

    this.newService.registerAuth(regData)
        .subscribe(res=>{
          if(res.success === true)
        {
          this.toastr.success(res.message);
          this.router.navigateByUrl('/login');
        }
        else{
          this.toastr.warning(res.message);
          console.log(res.message);
        }
        })
  }
}
