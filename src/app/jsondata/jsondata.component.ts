import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonDataService } from '../services/jsondataservice';
import students from './student.json';



interface Student {
  id: number;
  fname: string;
  lname: string;
  address: string;


}

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  details = [];


  students: Student[] = students;

  // constructor(private detailService: JsonDataService) { }

  ngOnInit(): void {
    // this.details=this.js.details;
    // this.detailService.getAllDetails().then((data: never[]) => {
    //   this.details = data;
    // })
  }

}
