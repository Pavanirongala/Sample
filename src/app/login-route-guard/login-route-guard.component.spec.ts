import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRouteGuardComponent } from './login-route-guard.component';

describe('LoginRouteGuardComponent', () => {
  let component: LoginRouteGuardComponent;
  let fixture: ComponentFixture<LoginRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRouteGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
