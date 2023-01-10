import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../services/serverservice';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  login = new FormGroup({
    Uname: new FormControl(),
    password: new FormControl(),
  })
  myvariable: string = 'welcome to angular';
  username: string = 'pavani';
  userName: string = 'durga';
  show = true;


  names = ['pavani', 'durga', 'rongala'];
  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {

    }
  }
  Show(f: any) {
    console.log(f);
  }
  Data(f: any) {
    console.log(f.value);
    f.reset();
    alert("Signed up successfully");

  }
  showdata() {
    console.log(this.login.value);
  }

  data!: any;
  id!: any;
  title!: any;
  price!: any;
  error!: string;

  constructor(private http: ServerService, private http1: HttpClient) {
  }
  getData() {
    this.http.get()
      .subscribe((data) => {
        this.data = data;
        console.log(this.data);
      }, (error) => {
        console.log(error);
        this.error = error;
      });
  }
  ngOnInit(): void {

  }


  addData(data: any) {
    console.warn(data);
    this.http.saveData(data).subscribe(res => {
      console.warn(res);
      // this.getData();
    }, (err) => {
      console.log(err);
    });
  }
  onEdit() {
    this.http.updateData();

  }
  onDelete(id: any) {
    return this.http.deleteData(id);
  }

}
