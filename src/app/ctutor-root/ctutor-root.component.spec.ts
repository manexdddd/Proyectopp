import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtutorRootComponent } from './ctutor-root.component';

describe('CtutorRootComponent', () => {
  let component: CtutorRootComponent;
  let fixture: ComponentFixture<CtutorRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtutorRootComponent]
    });
    fixture = TestBed.createComponent(CtutorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
