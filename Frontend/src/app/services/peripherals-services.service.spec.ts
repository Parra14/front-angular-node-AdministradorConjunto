import { TestBed } from '@angular/core/testing';

import { PeripheralsServicesService } from './peripherals-services.service';

describe('PeripheralsServicesService', () => {
  let service: PeripheralsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeripheralsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
