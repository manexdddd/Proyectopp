import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePublicComponent } from './acerca-de-public.component';

describe('AcercaDePublicComponent', () => {
  let component: AcercaDePublicComponent;
  let fixture: ComponentFixture<AcercaDePublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDePublicComponent]
    });
    fixture = TestBed.createComponent(AcercaDePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
