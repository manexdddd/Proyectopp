import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplaticasRootComponent } from './cplaticas-root.component';

describe('CplaticasRootComponent', () => {
  let component: CplaticasRootComponent;
  let fixture: ComponentFixture<CplaticasRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CplaticasRootComponent]
    });
    fixture = TestBed.createComponent(CplaticasRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
