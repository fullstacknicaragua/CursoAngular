import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonPasajerosComponent } from './buzon-pasajeros.component';

describe('BuzonPasajerosComponent', () => {
  let component: BuzonPasajerosComponent;
  let fixture: ComponentFixture<BuzonPasajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzonPasajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzonPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
