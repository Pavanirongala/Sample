import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanloadComponent } from './canload.component';

const routes: Routes = [{ path: '', component: CanloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanloadRoutingModule { }
