import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeroComponent } from './pasajero.component';

describe('PasajeroComponent', () => {
  let component: PasajeroComponent;
  let fixture: ComponentFixture<PasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
