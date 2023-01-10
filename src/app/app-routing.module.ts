import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CanActivateChildGuard } from './can-activate-child.guard';
import { CanloadGuard } from './canload.guard';
import { JsondataComponent } from './jsondata/jsondata.component';
import { LoginExampleComponent } from './login-example/login-example.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginUserComponent } from './loginuser/loginuser.component';
import { RouteGuardsService } from './route-guards.service';
import { ServerComponent } from './server/server.component';
import { ServerService } from './services/serverservice';
import { UnsavedataGuard } from './unsavedata.guard';


const routes: Routes = [

  {
    path: 'Loginuser', component: LoginformComponent
  },
  {
    path: '', component: LoginformComponent
  },
  { path: 'Login', component: LoginExampleComponent, canActivate: [CanActivateChildGuard], canDeactivate: [UnsavedataGuard] },

  { path: 'Json', component: JsondataComponent, canActivate: [CanActivateChildGuard] },
  { path: 'Server', component: ServerComponent, canActivate: [CanActivateChildGuard] },
  { path: 'Logoutuser', component: LoginUserComponent },

  {
    path: 'Admin', component: AdminComponent, canActivateChild: [AdminGuardGuard], canActivate: [CanActivateChildGuard],

    children: [
      {
        path: 'Manage', component: AdminManageComponent, canActivate: [CanActivateChildGuard]
      },
      {
        path: 'Edit', component: AdminEditComponent, canActivate: [RouteGuardsService]
      },
      {
        path: 'Delete', component: AdminDeleteComponent, canActivate: [RouteGuardsService]
      }
    ]
  },

  { path: 'canload', canLoad: [CanloadGuard], loadChildren: () => import('./canload/canload.module').then(m => m.CanloadModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [LoginExampleComponent, JsondataComponent, AdminComponent, AdminDeleteComponent, AdminEditComponent, AdminManageComponent];
