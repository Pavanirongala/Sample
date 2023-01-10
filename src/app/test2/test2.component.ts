import { Component, OnInit } from '@angular/core';
import "isomorphic-fetch";
import { interval, merge, of, pipe } from 'rxjs';
import { filter, first, map, reduce, scan, take, concat, skip } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';
import { ServerService } from '../services/serverservice';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  response: any;
  num: any;
  v = 20;
  data: any;
  ss: any;
  constructor(private http: ServerService) { }

  ngOnInit(): void {
    this.http.s1.subscribe(data => {
      console.log(data);
    })
    this.ss = this.http.s2.subscribe(data => {
      console.log(data);
    })

    // this.http.get()
    //   .subscribe((data) => {
    //     this.data = data;
    //     console.log(this.data);
    //   })


    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => console.log('value:', v));

    of(1, 2, 3)
      .pipe(first())
      .subscribe((v) => console.log('value:', v));

    const githubUsers = 'https://api.github.com/users?per_page=2';

    const users = ajax.getJSON(githubUsers);

    const subscribe = users.subscribe(
      res => console.log(res),
      err => console.error(err)
    );

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter(val => {
          return val % 2 == 0;
        }),
      )
      .subscribe(val => console.log(val));
    of(1, 2, 3, 4, 5)
      .pipe(scan((acc, value) => acc + value, 0))
      .subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log("Complete")
      );
    of(1, 2, 3, 4, 5)
      .pipe(reduce((acc, value) => acc + value, 0))
      .subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log("Complete")
      );

    let list1 = of(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
    let list2 = of(1, 3, 5, 7, 9, 11, 13, 15, 17, 19);
    let final_val = list1.pipe(concat(list2));
    final_val.subscribe(x => console.log(x));

    let list3 = of(1, 3, 5);
    let list4 = of(4, 5, 6, 7, 8, 9, 10)
    let res = merge(list3, list4);
    res.subscribe(x => console.log(x));


    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(x => console.log(x));


    // const source = interval(10);
    // const example = source.pipe(skip(5)).subscribe(val => console.log(val));
  }

  Emit() {
    this.ss.next('pavani2');
  }
}




