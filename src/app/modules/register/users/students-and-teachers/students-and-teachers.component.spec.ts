import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAndTeachersComponent } from './students-and-teachers.component';

describe('StudentsAndTeachersComponent', () => {
  let component: StudentsAndTeachersComponent;
  let fixture: ComponentFixture<StudentsAndTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsAndTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsAndTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
