import { NewService } from './../services/new.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm : FormGroup;
userList: any;
constructor(
  private fb: FormBuilder,
  private newService: NewService,
  private router: Router,
  private toastr: ToastrService
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

// Login Authentication from API
loginUser(){
  let formData = this.myForm.value;
  var userInfo = {
    email: formData.email,
    password: formData.password
  }

  this.newService.userAuth(userInfo)
      .subscribe(res => {
        if(res.success === true)
        {
          this.toastr.success(res.message);
          this.router.navigateByUrl('/dashboard');
        }
        else{
          this.toastr.error(res.message)
          console.log(res.message);
        }
      })
}

}