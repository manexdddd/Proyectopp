import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStudentComponent } from './blog-student.component';

describe('BlogStudentComponent', () => {
  let component: BlogStudentComponent;
  let fixture: ComponentFixture<BlogStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogStudentComponent]
    });
    fixture = TestBed.createComponent(BlogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
