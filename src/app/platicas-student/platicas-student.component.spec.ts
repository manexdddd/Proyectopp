import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaticasStudentComponent } from './platicas-student.component';

describe('PlaticasStudentComponent', () => {
  let component: PlaticasStudentComponent;
  let fixture: ComponentFixture<PlaticasStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaticasStudentComponent]
    });
    fixture = TestBed.createComponent(PlaticasStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
