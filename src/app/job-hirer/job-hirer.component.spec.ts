import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHirerComponent } from './job-hirer.component';

describe('JobHirerComponent', () => {
  let component: JobHirerComponent;
  let fixture: ComponentFixture<JobHirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobHirerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobHirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
