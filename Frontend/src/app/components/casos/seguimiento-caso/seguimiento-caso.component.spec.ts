import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoCasoComponent } from './seguimiento-caso.component';

describe('SeguimientoCasoComponent', () => {
  let component: SeguimientoCasoComponent;
  let fixture: ComponentFixture<SeguimientoCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoCasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
