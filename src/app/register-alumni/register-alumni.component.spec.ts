import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAlumniComponent } from './register-alumni.component';

describe('RegisterAlumniComponent', () => {
  let component: RegisterAlumniComponent;
  let fixture: ComponentFixture<RegisterAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
