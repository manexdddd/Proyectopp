import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPublicComponent } from './blog-public.component';

describe('BlogPublicComponent', () => {
  let component: BlogPublicComponent;
  let fixture: ComponentFixture<BlogPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPublicComponent]
    });
    fixture = TestBed.createComponent(BlogPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
