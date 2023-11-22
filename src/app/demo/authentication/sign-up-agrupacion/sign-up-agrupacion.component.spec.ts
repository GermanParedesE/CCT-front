import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAgrupacionComponent } from './sign-up-agrupacion.component';

describe('SignUpAgrupacionComponent', () => {
  let component: SignUpAgrupacionComponent;
  let fixture: ComponentFixture<SignUpAgrupacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpAgrupacionComponent]
    });
    fixture = TestBed.createComponent(SignUpAgrupacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
