import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPublicComponent } from './about-public.component';

describe('AboutPublicComponent', () => {
  let component: AboutPublicComponent;
  let fixture: ComponentFixture<AboutPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPublicComponent]
    });
    fixture = TestBed.createComponent(AboutPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
