import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ServerService } from '../services/serverservice';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  statusMessage: any;
  details: any;

  constructor(public service: ServerService) { }
  // ngOnInit() {
  //   this.service.getData().then((data) => {
  //     if (data === null) {
  //       this.statusMessage = 'not exist';
  //     }
  //     else {
  //       this.details = data;
  //     }
  //   }
  //   ).catch((error) => {
  //     this.statusMessage = 'problem with service';
  //     console.log(error);
  //   });
  // }

  ngOnInit(): void {
    //Observable
    const data = ajax('https://fakestoreapi.com/products');
    data.subscribe(d => console.log(d));
    data.subscribe(d => console.log(d));
    const observable = new Observable(obj => obj.next(Math.random()));
    observable.subscribe(d => console.log(d));
    observable.subscribe(d => console.log(d));

    //Subject
    const subject = new Subject();
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));
    subject.next(Math.random());
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));
    const res = data.subscribe(subject);
  }
}
