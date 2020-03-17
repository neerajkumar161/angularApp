import { NewService } from './../../services/new.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(
    private newService: NewService,
    private dataService: DataService
    ) { }
  productList: any;
  getProducts() : void 
  {
    this.newService.getProducts()
      .subscribe(res => {
        this.productList = res.ProductList;
      })
  }

  
  // Passing Product Id usign data.services
  editClicked(id,name,desc,image)
  {
    var dataObject = {
      id : id,
      name: name,
      desc : desc,
      image : image
    }
   this.dataService.changeData(dataObject);
  }
  ngOnInit(): void 
  {
    this.getProducts();
  }

  deleteProduct(prodId){
    this.newService.deleteProduct(prodId)
        .subscribe(res=>{
          alert('Delete'+res.message);
        })
      }
}
