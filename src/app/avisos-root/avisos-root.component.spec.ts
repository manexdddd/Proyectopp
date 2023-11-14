import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosRootComponent } from './avisos-root.component';

describe('AvisosRootComponent', () => {
  let component: AvisosRootComponent;
  let fixture: ComponentFixture<AvisosRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosRootComponent]
    });
    fixture = TestBed.createComponent(AvisosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
