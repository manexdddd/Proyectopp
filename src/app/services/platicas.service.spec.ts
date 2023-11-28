import { TestBed } from '@angular/core/testing';

import { PlaticasService } from './platicas.service';

describe('PlaticasService', () => {
  let service: PlaticasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaticasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
