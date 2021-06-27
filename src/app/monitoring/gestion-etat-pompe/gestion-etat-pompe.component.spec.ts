import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEtatPompeComponent } from './gestion-etat-pompe.component';

describe('GestionEtatPompeComponent', () => {
  let component: GestionEtatPompeComponent;
  let fixture: ComponentFixture<GestionEtatPompeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEtatPompeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEtatPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
