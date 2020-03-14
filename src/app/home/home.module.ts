import { SignupRoutingModule } from './../signup/signup-routing.module';
import { LoginRoutingModule } from './../login/login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginRoutingModule,
    SignupRoutingModule
  ]
})
export class HomeModule { }
