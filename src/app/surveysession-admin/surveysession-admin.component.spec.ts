import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysessionAdminComponent } from './surveysession-admin.component';

describe('SurveysessionAdminComponent', () => {
  let component: SurveysessionAdminComponent;
  let fixture: ComponentFixture<SurveysessionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveysessionAdminComponent]
    });
    fixture = TestBed.createComponent(SurveysessionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
