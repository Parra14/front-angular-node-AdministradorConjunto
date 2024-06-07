import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralsCreateComponent } from './peripherals-create.component';

describe('PeripheralsCreateComponent', () => {
  let component: PeripheralsCreateComponent;
  let fixture: ComponentFixture<PeripheralsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheralsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeripheralsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
