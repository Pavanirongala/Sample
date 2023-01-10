import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanloadComponent } from './canload.component';

describe('CanloadComponent', () => {
  let component: CanloadComponent;
  let fixture: ComponentFixture<CanloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
