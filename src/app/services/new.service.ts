import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'authorization'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NewService {


  constructor(
    private httpClient : HttpClient
  ) { 
      httpOptions.headers =
      httpOptions.headers.set('Authorization', localStorage.getItem('key'));
  }
  
  addUser(registerData) : Observable <any>
  {
    return this.httpClient.post('http://localhost:3000/api/register',registerData);
  }

  getUser(userid): Observable <any>
  { 
    return this.httpClient.get('http://localhost:3000/api/user/'+userid,httpOptions);
  }

  getProducts() : Observable <any> 
  {
    return this.httpClient.get('http://localhost:3000/api/products',httpOptions);
  }

  addProduct(productData) : Observable <any>
  {
    return this.httpClient.post('http://localhost:3000/api/products',productData,httpOptions);
  }

  updateProduct(productData) : Observable <any>
  {
    return this.httpClient.put('http://localhost:3000/api/products/:productId',productData,httpOptions);
  }

  deleteProduct(prodId): Observable <any>
  {
    return this.httpClient.delete('http://localhost:3000/api/products/'+prodId,httpOptions);
  }
  
  userAuth(formData): Observable <any>{
    return this.httpClient.post('http://localhost:3000/api/login',formData);
  }

  registerAuth(formData): Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/register',formData);
  }

}
