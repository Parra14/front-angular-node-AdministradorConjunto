import { TestBed } from '@angular/core/testing';

import { CasosServicesService } from './casos-services.service';

describe('CasosServicesService', () => {
  let service: CasosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
