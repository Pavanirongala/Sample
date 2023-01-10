import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productArray = [
    {
      name: "Bag",
      cost: 300,
      qnt: 1
    },
    {
      name: "shirt",
      cost: 700,
      qnt: 1
    },
    {
      name: "rings",
      cost: 200,
      qnt: 1
    }
  ];
  inc(prod: any) {
    prod.qnt = prod.qnt + 1;
  }
  dec(prod: any) {
    if (prod.qnt! > 0)
      prod.qnt = prod.qnt - 1;
  }
}
