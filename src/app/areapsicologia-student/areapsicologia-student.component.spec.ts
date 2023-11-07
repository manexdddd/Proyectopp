import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapsicologiaStudentComponent } from './areapsicologia-student.component';

describe('AreapsicologiaStudentComponent', () => {
  let component: AreapsicologiaStudentComponent;
  let fixture: ComponentFixture<AreapsicologiaStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreapsicologiaStudentComponent]
    });
    fixture = TestBed.createComponent(AreapsicologiaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
