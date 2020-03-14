import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewService } from './../../services/new.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  serverResponse: any;
  myForm : FormGroup;
  constructor(
    private newService: NewService,
    private fb: FormBuilder
    ) { }
  productList: any;

  ngOnInit() {
    this.myForm = this.fb.group({
      pid:['',[
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]],
      pname:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      pdesc:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      pimg:['',[
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }
  get pid(){
    return this.myForm.get('pid');
  }
  get pname(){
    return this.myForm.get('pname');
  }
  get pdesc(){
    return this.myForm.get('pdesc');
  }
  get pimg(){
    return this.myForm.get('pimg');
  }

  onClick(){
    let formData = this.myForm.value;
    // console.log(formData.pname);
    var registerData = {
      pID: formData.pid,
      pName: formData.pname,
      pDesc: formData.pdesc,
      pImage: formData.pimg
    }

    this.newService.addProduct(registerData)
        .subscribe(res => {
          console.log('im here2');
            console.log('Message',res.message);
            this.serverResponse = res.message;
        })
  }
  
}
