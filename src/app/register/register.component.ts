import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  confirmPassword:String;
  constructor() { }
  Register(username,password,confirmPassword){
    if(password==confirmPassword && username!=''){
     alert("Registered Successfully!!")
    }
    else if(password!=confirmPassword){
      alert("Typo in password")
    }
    else{
      alert("Username should not be empty")
    }
  }
  ngOnInit(): void {
    this.user={username:'',password:''}
  }

}
