import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionAdminComponent } from './attention-admin.component';

describe('AttentionAdminComponent', () => {
  let component: AttentionAdminComponent;
  let fixture: ComponentFixture<AttentionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttentionAdminComponent]
    });
    fixture = TestBed.createComponent(AttentionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
