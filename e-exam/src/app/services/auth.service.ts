import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    uauth:boolean=false;
  constructor() { }

  getFlag(){
    return this.uauth;
  }
  setFlag(flag){
    this.uauth = flag;
  }
}
