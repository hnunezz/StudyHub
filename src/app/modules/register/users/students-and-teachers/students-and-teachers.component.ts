import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrincipalFormComponent } from '../common/principal-form/principal-form.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';

@Component({
  selector: 'app-students-and-teachers',
  standalone: true,
  imports: [
    CommonModule,
    PrincipalFormComponent,
    InputTextComponent
  ],
  templateUrl: './students-and-teachers.component.html',
  styleUrl: './students-and-teachers.component.scss'
})
export class StudentsAndTeachersComponent {

}
