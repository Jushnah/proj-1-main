import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfacultyprofileComponent } from './editfacultyprofile.component';

describe('EditfacultyprofileComponent', () => {
  let component: EditfacultyprofileComponent;
  let fixture: ComponentFixture<EditfacultyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfacultyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfacultyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
