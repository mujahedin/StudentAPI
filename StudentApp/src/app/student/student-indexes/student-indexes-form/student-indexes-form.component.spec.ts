import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIndexesFormComponent } from './student-indexes-form.component';

describe('StudentIndexesFormComponent', () => {
  let component: StudentIndexesFormComponent;
  let fixture: ComponentFixture<StudentIndexesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIndexesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIndexesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
