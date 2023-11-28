import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorvRootComponent } from './tutorv-root.component';

describe('TutorvRootComponent', () => {
  let component: TutorvRootComponent;
  let fixture: ComponentFixture<TutorvRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorvRootComponent]
    });
    fixture = TestBed.createComponent(TutorvRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
