import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightByOriginComponent } from './flight-by-origin.component';

describe('FlightByOriginComponent', () => {
  let component: FlightByOriginComponent;
  let fixture: ComponentFixture<FlightByOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightByOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightByOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
