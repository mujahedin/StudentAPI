import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIndexesComponent } from './student-indexes.component';

describe('StudentIndexesComponent', () => {
  let component: StudentIndexesComponent;
  let fixture: ComponentFixture<StudentIndexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIndexesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
