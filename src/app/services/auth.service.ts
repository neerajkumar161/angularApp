import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private router: Router) { }
  canActivate()
  {
      if(localStorage.getItem('key'))
        return true;
      else
      {

        this.router.navigateByUrl('login');
        return false;// redirect to page if token not verified
      }
  }
}
