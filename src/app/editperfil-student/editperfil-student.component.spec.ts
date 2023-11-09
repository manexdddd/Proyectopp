import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperfilStudentComponent } from './editperfil-student.component';

describe('EditperfilStudentComponent', () => {
  let component: EditperfilStudentComponent;
  let fixture: ComponentFixture<EditperfilStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditperfilStudentComponent]
    });
    fixture = TestBed.createComponent(EditperfilStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
