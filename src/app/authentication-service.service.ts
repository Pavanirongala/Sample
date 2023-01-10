import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  uname!: string;
  password!: string;
  validateUser(uname: string, password: string) {
    if (this.uname == uname && this.password == password) {
      return true;
    }
    return true;
  }

  constructor() { }


}



