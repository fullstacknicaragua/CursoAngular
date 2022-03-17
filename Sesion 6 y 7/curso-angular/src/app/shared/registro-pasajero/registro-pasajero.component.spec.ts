import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPasajeroComponent } from './registro-pasajero.component';

describe('RegistroPasajeroComponent', () => {
  let component: RegistroPasajeroComponent;
  let fixture: ComponentFixture<RegistroPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
