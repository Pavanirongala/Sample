import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SimpleComponent } from './others/simple.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ServerService } from './services/serverservice';
import { LoginExampleComponent } from './login-example/login-example.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { JsondataComponent } from './jsondata/jsondata.component';
import { RouteGuardsService } from './route-guards.service';
import { UnsavedataGuard } from './unsavedata.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { CanActivateChildGuard } from './can-activate-child.guard';
import { AdminGuardGuard } from './admin-guard.guard';
import { LoginRouteGuardComponent } from './login-route-guard/login-route-guard.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ObservableComponent } from './observable/observable.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SimpleComponent,
    CustomDirective,
    StudentloginComponent,
    LoginExampleComponent,
    StudentdashboardComponent,
    JsondataComponent,
    routeComponents,
    AdminComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    AdminManageComponent,
    LoginRouteGuardComponent,
    LoginformComponent,
    ObservableComponent,
    Test1Component,
    Test2Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

  ],
  providers: [ServerService, RouteGuardsService, UnsavedataGuard, CanActivateChildGuard, AdminGuardGuard,
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [Test2Component]
})
export class AppModule { }
