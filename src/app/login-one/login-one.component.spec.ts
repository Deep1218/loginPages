import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOneComponent } from './login-one.component';

describe('LoginOneComponent', () => {
  let component: LoginOneComponent;
  let fixture: ComponentFixture<LoginOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
