import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoalumnosTutoresComponent } from './grupoalumnos-tutores.component';

describe('GrupoalumnosTutoresComponent', () => {
  let component: GrupoalumnosTutoresComponent;
  let fixture: ComponentFixture<GrupoalumnosTutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoalumnosTutoresComponent]
    });
    fixture = TestBed.createComponent(GrupoalumnosTutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
