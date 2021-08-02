import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVerifyComponent } from './jobs-verify.component';

describe('JobsVerifyComponent', () => {
  let component: JobsVerifyComponent;
  let fixture: ComponentFixture<JobsVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
