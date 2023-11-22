import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpsycoRootComponent } from './cpsyco-root.component';

describe('CpsycoRootComponent', () => {
  let component: CpsycoRootComponent;
  let fixture: ComponentFixture<CpsycoRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpsycoRootComponent]
    });
    fixture = TestBed.createComponent(CpsycoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
