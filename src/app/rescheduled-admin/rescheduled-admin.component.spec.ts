import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduledAdminComponent } from './rescheduled-admin.component';

describe('RescheduledAdminComponent', () => {
  let component: RescheduledAdminComponent;
  let fixture: ComponentFixture<RescheduledAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescheduledAdminComponent]
    });
    fixture = TestBed.createComponent(RescheduledAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
