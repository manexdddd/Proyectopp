import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasPublicComponent } from './encuestas-public.component';

describe('EncuestasPublicComponent', () => {
  let component: EncuestasPublicComponent;
  let fixture: ComponentFixture<EncuestasPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncuestasPublicComponent]
    });
    fixture = TestBed.createComponent(EncuestasPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
