import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCListComponent } from './pc-list.component';

describe('PCListComponent', () => {
  let component: PCListComponent;
  let fixture: ComponentFixture<PCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
