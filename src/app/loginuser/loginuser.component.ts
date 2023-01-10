import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './loginuser.component.html',
  styles: [``]
})
export class LoginUserComponent implements OnInit {


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    alert('Logged out Successfully');
    return this.router.navigate(['Loginuser']);
  }
}
