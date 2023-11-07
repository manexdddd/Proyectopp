import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosStudentComponent } from './avisos-student.component';

describe('AvisosStudentComponent', () => {
  let component: AvisosStudentComponent;
  let fixture: ComponentFixture<AvisosStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosStudentComponent]
    });
    fixture = TestBed.createComponent(AvisosStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
