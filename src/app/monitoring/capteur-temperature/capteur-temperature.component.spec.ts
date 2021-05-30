import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapteurTemperatureComponent } from './capteur-temperature.component';

describe('CapteurTemperatureComponent', () => {
  let component: CapteurTemperatureComponent;
  let fixture: ComponentFixture<CapteurTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapteurTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapteurTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
