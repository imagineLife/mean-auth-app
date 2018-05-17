import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	//create object from form fields
  	const user = {
  		name: this.name,
  		username: this.username,
  		email: this.email,
  		password: this.password
  	}
  
    //make sure fields exist
    if(!this.validateService.validateRegister(user)){
      console.log('Please fill in all fields');
      return false;
    }

    //make sure email is correct
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please use a valid email');
      return false;
    }

  }

}
