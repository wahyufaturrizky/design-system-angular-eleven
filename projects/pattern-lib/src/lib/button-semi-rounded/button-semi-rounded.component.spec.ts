import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSemiRoundedComponent } from './button-semi-rounded.component';

describe('ButtonSemiRoundedComponent', () => {
  let component: ButtonSemiRoundedComponent;
  let fixture: ComponentFixture<ButtonSemiRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSemiRoundedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSemiRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
