import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosTutorComponent } from './avisos-tutor.component';

describe('AvisosTutorComponent', () => {
  let component: AvisosTutorComponent;
  let fixture: ComponentFixture<AvisosTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosTutorComponent]
    });
    fixture = TestBed.createComponent(AvisosTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
