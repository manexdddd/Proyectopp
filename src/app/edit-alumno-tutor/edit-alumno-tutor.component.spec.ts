import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlumnoTutorComponent } from './edit-alumno-tutor.component';

describe('EditAlumnoTutorComponent', () => {
  let component: EditAlumnoTutorComponent;
  let fixture: ComponentFixture<EditAlumnoTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAlumnoTutorComponent]
    });
    fixture = TestBed.createComponent(EditAlumnoTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
