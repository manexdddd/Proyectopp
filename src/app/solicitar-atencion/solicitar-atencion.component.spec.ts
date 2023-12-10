import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAtencionComponent } from './solicitar-atencion.component';

describe('SolicitarAtencionComponent', () => {
  let component: SolicitarAtencionComponent;
  let fixture: ComponentFixture<SolicitarAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitarAtencionComponent]
    });
    fixture = TestBed.createComponent(SolicitarAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
