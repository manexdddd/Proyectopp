import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPerfilStudentComponent } from './sidebar-perfil-student.component';

describe('SidebarPerfilStudentComponent', () => {
  let component: SidebarPerfilStudentComponent;
  let fixture: ComponentFixture<SidebarPerfilStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPerfilStudentComponent]
    });
    fixture = TestBed.createComponent(SidebarPerfilStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
