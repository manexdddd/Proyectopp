import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsycoRootComponent } from './psyco-root.component';

describe('PsycoRootComponent', () => {
  let component: PsycoRootComponent;
  let fixture: ComponentFixture<PsycoRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsycoRootComponent]
    });
    fixture = TestBed.createComponent(PsycoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
