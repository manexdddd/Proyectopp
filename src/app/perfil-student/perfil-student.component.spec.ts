import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilStudentComponent } from './perfil-student.component';

describe('PerfilStudentComponent', () => {
  let component: PerfilStudentComponent;
  let fixture: ComponentFixture<PerfilStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilStudentComponent]
    });
    fixture = TestBed.createComponent(PerfilStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
