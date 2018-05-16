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

}
