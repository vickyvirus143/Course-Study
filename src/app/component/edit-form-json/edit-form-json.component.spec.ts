import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormJsonComponent } from './edit-form-json.component';

describe('EditFormJsonComponent', () => {
  let component: EditFormJsonComponent;
  let fixture: ComponentFixture<EditFormJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
