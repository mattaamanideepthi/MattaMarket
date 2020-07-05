import { Component, OnInit } from '@angular/core';
import{User} from '../../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formHeader = 'Login';
  user:User;
  
  constructor() { 

  }
  login(name){
    alert("Logged in!!"+name);
  }
  ngOnInit(): void {
    this.user = {username:'',password:''}
  }

}
