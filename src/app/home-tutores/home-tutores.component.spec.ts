import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutoresComponent } from './home-tutores.component';

describe('HomeTutoresComponent', () => {
  let component: HomeTutoresComponent;
  let fixture: ComponentFixture<HomeTutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTutoresComponent]
    });
    fixture = TestBed.createComponent(HomeTutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
