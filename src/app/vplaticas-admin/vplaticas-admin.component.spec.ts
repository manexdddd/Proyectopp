import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VplaticasAdminComponent } from './vplaticas-admin.component';

describe('VplaticasAdminComponent', () => {
  let component: VplaticasAdminComponent;
  let fixture: ComponentFixture<VplaticasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VplaticasAdminComponent]
    });
    fixture = TestBed.createComponent(VplaticasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
