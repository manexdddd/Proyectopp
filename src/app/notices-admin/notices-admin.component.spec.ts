import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesAdminComponent } from './notices-admin.component';

describe('NoticesAdminComponent', () => {
  let component: NoticesAdminComponent;
  let fixture: ComponentFixture<NoticesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticesAdminComponent]
    });
    fixture = TestBed.createComponent(NoticesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
