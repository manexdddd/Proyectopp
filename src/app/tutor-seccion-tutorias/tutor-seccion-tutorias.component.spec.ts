import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSeccionTutoriasComponent } from './tutor-seccion-tutorias.component';

describe('TutorSeccionTutoriasComponent', () => {
  let component: TutorSeccionTutoriasComponent;
  let fixture: ComponentFixture<TutorSeccionTutoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorSeccionTutoriasComponent]
    });
    fixture = TestBed.createComponent(TutorSeccionTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
