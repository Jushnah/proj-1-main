import { TestBed } from '@angular/core/testing';

import { ChildGuard } from './child.guard';

describe('ChildGuard', () => {
  let guard: ChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
