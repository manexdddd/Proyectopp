import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavisosAdminComponent } from './cavisos-admin.component';

describe('CavisosAdminComponent', () => {
  let component: CavisosAdminComponent;
  let fixture: ComponentFixture<CavisosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CavisosAdminComponent]
    });
    fixture = TestBed.createComponent(CavisosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
