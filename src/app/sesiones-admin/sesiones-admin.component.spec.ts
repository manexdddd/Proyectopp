import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesAdminComponent } from './sesiones-admin.component';

describe('SesionesAdminComponent', () => {
  let component: SesionesAdminComponent;
  let fixture: ComponentFixture<SesionesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesionesAdminComponent]
    });
    fixture = TestBed.createComponent(SesionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
