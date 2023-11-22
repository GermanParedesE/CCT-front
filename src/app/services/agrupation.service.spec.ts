import { TestBed } from '@angular/core/testing';

import { AgrupationService } from './agrupation.service';

describe('AgrupationService', () => {
  let service: AgrupationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrupationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
