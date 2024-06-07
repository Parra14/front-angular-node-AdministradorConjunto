import { TestBed } from '@angular/core/testing';

import { ReservacionServiceService } from './reservacion-service.service';

describe('ReservacionServiceService', () => {
  let service: ReservacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
