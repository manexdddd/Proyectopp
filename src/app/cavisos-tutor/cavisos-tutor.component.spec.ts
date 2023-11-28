import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavisosTutorComponent } from './cavisos-tutor.component';

describe('CavisosTutorComponent', () => {
  let component: CavisosTutorComponent;
  let fixture: ComponentFixture<CavisosTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CavisosTutorComponent]
    });
    fixture = TestBed.createComponent(CavisosTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
