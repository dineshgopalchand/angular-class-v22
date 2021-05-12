import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataAndHandleEventComponent } from './display-data-and-handle-event.component';

describe('DisplayDataAndHandleEventComponent', () => {
  let component: DisplayDataAndHandleEventComponent;
  let fixture: ComponentFixture<DisplayDataAndHandleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataAndHandleEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataAndHandleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
