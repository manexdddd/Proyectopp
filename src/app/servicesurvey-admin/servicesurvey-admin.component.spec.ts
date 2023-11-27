import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesurveyAdminComponent } from './servicesurvey-admin.component';

describe('ServicesurveyAdminComponent', () => {
  let component: ServicesurveyAdminComponent;
  let fixture: ComponentFixture<ServicesurveyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesurveyAdminComponent]
    });
    fixture = TestBed.createComponent(ServicesurveyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
