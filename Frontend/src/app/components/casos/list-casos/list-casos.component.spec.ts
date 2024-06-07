import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasosComponent } from './list-casos.component';

describe('ListCasosComponent', () => {
  let component: ListCasosComponent;
  let fixture: ComponentFixture<ListCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
