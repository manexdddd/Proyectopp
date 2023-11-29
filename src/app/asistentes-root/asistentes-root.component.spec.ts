import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistentesRootComponent } from './asistentes-root.component';

describe('AsistentesRootComponent', () => {
  let component: AsistentesRootComponent;
  let fixture: ComponentFixture<AsistentesRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistentesRootComponent]
    });
    fixture = TestBed.createComponent(AsistentesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
