import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionsurveyAdminComponent } from './satisfactionsurvey-admin.component';

describe('SatisfactionsurveyAdminComponent', () => {
  let component: SatisfactionsurveyAdminComponent;
  let fixture: ComponentFixture<SatisfactionsurveyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatisfactionsurveyAdminComponent]
    });
    fixture = TestBed.createComponent(SatisfactionsurveyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
