import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginExampleComponent } from './login-example/login-example.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedataGuard implements CanDeactivate<LoginExampleComponent> {
  uname!: string;
  email!: string;
  address!: string;

  canDeactivate(
    component: LoginExampleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot) {
    // component.forms
    return component.canExit();

  }

}

