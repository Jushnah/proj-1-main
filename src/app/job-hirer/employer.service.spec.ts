import { TestBed } from '@angular/core/testing';

import { EmployerService } from './employer.service';

describe('EmployerService', () => {
  let service: EmployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
