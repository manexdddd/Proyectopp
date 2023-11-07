import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAdminComponent } from './survey-admin.component';

describe('SurveyAdminComponent', () => {
  let component: SurveyAdminComponent;
  let fixture: ComponentFixture<SurveyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyAdminComponent]
    });
    fixture = TestBed.createComponent(SurveyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
