import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(
    private httpClient : HttpClient
  ) { }

  addUser(registerData) : Observable <any>
  {
    return this.httpClient.post('http://localhost:3000/api/register',registerData);
  }

  getProducts() : Observable <any> 
  {
    return this.httpClient.get('http://localhost:3000/api/products');
  }

  addProduct(productData) : Observable <any>
  {
    return this.httpClient.post('http://localhost:3000/api/products',productData);
  }

  updateProduct(productData) : Observable <any>
  {
    return this.httpClient.put('http://localhost:3000/api/products/:productId',productData);
  }

  deleteProduct(prodId): Observable <any>
  {
    return this.httpClient.delete('http://localhost:3000/api/products/'+prodId);
  }
  
  userAuth(formData): Observable <any>{
    return this.httpClient.post('http://localhost:3000/api/login',formData);
  }

  registerAuth(formData): Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/register',formData);
  }

}
