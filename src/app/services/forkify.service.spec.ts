import { TestBed } from '@angular/core/testing';

import { ForkifyService } from './forkify.service';

describe('ForkifyService', () => {
  let service: ForkifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
