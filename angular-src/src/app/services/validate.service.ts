import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(userObj){
  	if(userObj.name === undefined || userObj.email === undefined || userObj.username === undefined || userObj.password === undefined){
  		return false;
  	}else{
  		return true;
  	}
  }

  validateEmail(emailAddr){
  	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(emailAddr);
  }
}
