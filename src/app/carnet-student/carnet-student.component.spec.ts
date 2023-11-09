import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetStudentComponent } from './carnet-student.component';

describe('CarnetStudentComponent', () => {
  let component: CarnetStudentComponent;
  let fixture: ComponentFixture<CarnetStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarnetStudentComponent]
    });
    fixture = TestBed.createComponent(CarnetStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
