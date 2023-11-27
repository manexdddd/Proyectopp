import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsAdminComponent } from './requests-admin.component';

describe('RequestsAdminComponent', () => {
  let component: RequestsAdminComponent;
  let fixture: ComponentFixture<RequestsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsAdminComponent]
    });
    fixture = TestBed.createComponent(RequestsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
