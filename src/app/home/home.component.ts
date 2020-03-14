import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './../login/login-routing.module';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigateLogin(){
    this.router.navigateByUrl('/login');
  }
  navigateSignup(){
    this.router.navigateByUrl('/signup');
  }
}
