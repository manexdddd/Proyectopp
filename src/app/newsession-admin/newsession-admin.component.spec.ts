import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsessionAdminComponent } from './newsession-admin.component';

describe('NewsessionAdminComponent', () => {
  let component: NewsessionAdminComponent;
  let fixture: ComponentFixture<NewsessionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsessionAdminComponent]
    });
    fixture = TestBed.createComponent(NewsessionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
