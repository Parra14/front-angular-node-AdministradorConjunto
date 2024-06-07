import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCasosComponent } from './create-casos.component';

describe('CreateCasosComponent', () => {
  let component: CreateCasosComponent;
  let fixture: ComponentFixture<CreateCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
