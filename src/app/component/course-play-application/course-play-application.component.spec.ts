import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePlayApplicationComponent } from './course-play-application.component';

describe('CoursePlayApplicationComponent', () => {
  let component: CoursePlayApplicationComponent;
  let fixture: ComponentFixture<CoursePlayApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePlayApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePlayApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
