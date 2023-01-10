import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../services/serverservice';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor(private ss: ServerService) { }
  mobiles = this.ss.mobiles;
  ngOnInit(): void {
  }
  addItem() {
    return this.mobiles.push('vivo');
  }
}
