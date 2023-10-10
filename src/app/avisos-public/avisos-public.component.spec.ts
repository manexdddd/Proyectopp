import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosPublicComponent } from './avisos-public.component';

describe('AvisosPublicComponent', () => {
  let component: AvisosPublicComponent;
  let fixture: ComponentFixture<AvisosPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosPublicComponent]
    });
    fixture = TestBed.createComponent(AvisosPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
