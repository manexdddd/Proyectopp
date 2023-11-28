import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaticasRootComponent } from './platicas-root.component';

describe('PlaticasRootComponent', () => {
  let component: PlaticasRootComponent;
  let fixture: ComponentFixture<PlaticasRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaticasRootComponent]
    });
    fixture = TestBed.createComponent(PlaticasRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
