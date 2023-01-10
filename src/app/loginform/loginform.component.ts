import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  form = new FormGroup({
    uname: new FormControl(),
    password: new FormControl()
  })
  router: any;
  log = true;
  constructor(private service: AuthenticationServiceService, private r: Router) {

  }

  ngOnInit(): void {
  }
  login() {
    let res = this.service.validateUser(this.form.value['uname'], this.form.value['password']);
    if (res) {
      console.log(this.form.value);
      localStorage.setItem('details', JSON.stringify(this.form.value));
      alert("Logged in Successfully");
    }
    else {
      alert("Invalid credentials");
    }
  }


}
// login(uname: string, password: string) {
  //   let user = this.users.filter(x => x.uname === uname).filter(y => y.password === password);
  //   if (user && user.length == 1) {
  //     localStorage.setItem('data', JSON.stringify({ token: "hello", name: user[0].uname }));

  //   }
  //   return user[0];
  // }
