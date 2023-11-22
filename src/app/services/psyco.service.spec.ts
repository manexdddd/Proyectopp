import { TestBed } from '@angular/core/testing';

import { PsycoService } from './psyco.service';

describe('PsycoService', () => {
  let service: PsycoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsycoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
