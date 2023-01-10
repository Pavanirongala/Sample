import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.css']
})
export class LoginExampleComponent implements OnInit {
  // static canExit(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  uname!: string;
  email!: string;
  address!: string;

  forms: FormGroup[] = [];
  constructor() {
  }

  ngOnInit(): void {

    this.addData();
  }

  deleteData(index: any) {
    this.forms.splice(index, 1);
  }
  addData() {
    this.forms.push(
      new FormGroup({
        uname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]*$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', Validators.required)
      })
    );
  }
  canExit() {
    if (this.uname || this.email || this.address) {
      //  sessionStorage.setItem('data',this.forms);
      return window.confirm("Do you have unsaved data,Are you really Exit?");
    }
    else {
      true;
    }
    return true;
  }

}

