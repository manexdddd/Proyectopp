import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupAdminComponent } from './followup-admin.component';

describe('FollowupAdminComponent', () => {
  let component: FollowupAdminComponent;
  let fixture: ComponentFixture<FollowupAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowupAdminComponent]
    });
    fixture = TestBed.createComponent(FollowupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
