import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRootComponent } from './profile-root.component';

describe('ProfileRootComponent', () => {
  let component: ProfileRootComponent;
  let fixture: ComponentFixture<ProfileRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileRootComponent]
    });
    fixture = TestBed.createComponent(ProfileRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
