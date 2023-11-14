import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavisosRootComponent } from './cavisos-root.component';

describe('CavisosRootComponent', () => {
  let component: CavisosRootComponent;
  let fixture: ComponentFixture<CavisosRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CavisosRootComponent]
    });
    fixture = TestBed.createComponent(CavisosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
