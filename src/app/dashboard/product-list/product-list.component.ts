import { NewService } from './../../services/new.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private newService: NewService
    ) { }
  productList: any;
  
  getProducts() : void {
    this.newService.getProducts()
      .subscribe(res => {
        this.productList = res.ProductList;
      })
    }

  ngOnInit(): void {
    this.getProducts();
  }

}
