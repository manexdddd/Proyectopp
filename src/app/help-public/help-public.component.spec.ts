import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPublicComponent } from './help-public.component';

describe('HelpPublicComponent', () => {
  let component: HelpPublicComponent;
  let fixture: ComponentFixture<HelpPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpPublicComponent]
    });
    fixture = TestBed.createComponent(HelpPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
