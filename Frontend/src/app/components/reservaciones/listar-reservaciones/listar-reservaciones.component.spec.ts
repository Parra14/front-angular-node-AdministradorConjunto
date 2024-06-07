import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservacionesComponent } from './listar-reservaciones.component';

describe('ListarReservacionesComponent', () => {
  let component: ListarReservacionesComponent;
  let fixture: ComponentFixture<ListarReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
