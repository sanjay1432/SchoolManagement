import { Injectable } from '@angular/core';

@Injectable()
export class SignService {

  constructor() { }


  create(user){
    var users = [];
    users.push(user)
    localStorage.setItem("users", JSON.stringify(user));
  }
   
  get(){
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
}
