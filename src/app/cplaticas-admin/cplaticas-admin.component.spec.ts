import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplaticasAdminComponent } from './cplaticas-admin.component';

describe('CplaticasAdminComponent', () => {
  let component: CplaticasAdminComponent;
  let fixture: ComponentFixture<CplaticasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CplaticasAdminComponent]
    });
    fixture = TestBed.createComponent(CplaticasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
