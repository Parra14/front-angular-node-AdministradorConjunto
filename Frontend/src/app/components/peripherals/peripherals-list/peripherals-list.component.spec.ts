import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralsListComponent } from './peripherals-list.component';

describe('PeripheralsListComponent', () => {
  let component: PeripheralsListComponent;
  let fixture: ComponentFixture<PeripheralsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheralsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeripheralsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
