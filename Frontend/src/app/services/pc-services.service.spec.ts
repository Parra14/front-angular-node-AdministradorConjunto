import { TestBed } from '@angular/core/testing';

import { PcServicesService } from './pc-services.service';

describe('PcServicesService', () => {
  let service: PcServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
