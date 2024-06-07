import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReservacionComponent } from './crear-reservacion.component';

describe('CrearReservacionComponent', () => {
  let component: CrearReservacionComponent;
  let fixture: ComponentFixture<CrearReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
