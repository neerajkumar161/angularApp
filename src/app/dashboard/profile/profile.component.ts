import { NewService } from './../../services/new.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private newService: NewService) { }
  userInfo:any;
  username:any;
  email: any;

  ngOnInit(): void {
    let userid = localStorage.getItem('username');
    this.newService.getUser(userid)
        .subscribe(res=>{
          // console.log(res.message._id);
          this.username = res.message.firstName + " " + res.message.lastName;
          this.email = res.message.email;
        })
  }

}
