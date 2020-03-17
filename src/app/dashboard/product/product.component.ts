import { Router } from '@angular/router';
import { ProductListComponent } from './../product-list/product-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewService } from './../../services/new.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  serverResponse: any;
  myForm : FormGroup;
  buttonValue : string;
  list: ProductListComponent;
  public isVisible: boolean;


  constructor(
    private newService: NewService,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
    ) {  }
  productData: any;
  prodId: any;
  ngOnInit() {
    this.myForm = this.fb.group({
      pid:['',[
        Validators.required,
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
    this.isVisible = true;
    // Get the productId
    this.dataService.currentData.subscribe(res =>{
      {
        this.productData = {
          pID : res.id,
          pName : res.name,
          pDesc : res.desc,
          pImage: res.image,
        }
        //this.updateProduct(this.productData);

      }
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

  onClick()   // Product added here
  {
    let formData = this.myForm.value;
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

  updateProduct()
  {
    this.newService.updateProduct(this.productData)
        .subscribe(res=> {
          console.log(res.message);
          alert(res.message);
        })
  }  
}
