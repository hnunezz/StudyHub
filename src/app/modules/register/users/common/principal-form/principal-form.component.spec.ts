import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalFormComponent } from './principal-form.component';

describe('PrincipalFormComponent', () => {
  let component: PrincipalFormComponent;
  let fixture: ComponentFixture<PrincipalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
