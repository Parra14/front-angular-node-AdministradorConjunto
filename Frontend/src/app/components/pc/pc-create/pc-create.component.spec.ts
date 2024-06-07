import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCCreateComponent } from './pc-create.component';

describe('PCCreateComponent', () => {
  let component: PCCreateComponent;
  let fixture: ComponentFixture<PCCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
