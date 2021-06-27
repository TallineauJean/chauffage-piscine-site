import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutPompeComponent } from './statut-pompe.component';

describe('StatutPompeComponent', () => {
  let component: StatutPompeComponent;
  let fixture: ComponentFixture<StatutPompeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutPompeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
