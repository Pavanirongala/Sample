import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanloadRoutingModule } from './canload-routing.module';
import { CanloadComponent } from './canload.component';


@NgModule({
  declarations: [
    CanloadComponent
  ],
  imports: [
    CommonModule,
    CanloadRoutingModule
  ]
})
export class CanloadModule { }
