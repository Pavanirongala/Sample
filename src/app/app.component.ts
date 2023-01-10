import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { count } from 'rxjs';
import { LoginExampleComponent } from './login-example/login-example.component';
import { ServerComponent } from './server/server.component';
import { ServerService } from './services/serverservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  wish: string = "pavani";
  public email!: string;
  public password!: string;
  data!: any;
  usertext: string = 'pavani';
  firstName!: string;
  lastName!: string;
  siblings!: Array<string>;

  constructor(private http: HttpClient, private ss: ServerService, private router: Router) { }
  ngOnInit(): void {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
    //   this.ss.login(this.email, this.password).subscribe((data) => {
    //     this.data = data;
    //     console.log('obj', this.data);
    //     this.email = this.data.email;
    //     this.password = this.data.password;
    //     localStorage.setItem('email', this.email);
    //     localStorage.setItem('password', this.password);
    //     if (localStorage.getItem('email')) {
    //       this.router.navigate(['/server']);
    //     }
    //   })
    // }

  }


}
