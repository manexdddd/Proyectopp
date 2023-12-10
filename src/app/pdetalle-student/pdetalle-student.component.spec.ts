import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdetalleStudentComponent } from './pdetalle-student.component';

describe('PdetalleStudentComponent', () => {
  let component: PdetalleStudentComponent;
  let fixture: ComponentFixture<PdetalleStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdetalleStudentComponent]
    });
    fixture = TestBed.createComponent(PdetalleStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
