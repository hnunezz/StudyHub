import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrincipalFormComponent } from '../principal-form/principal-form.component';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { classList } from '../../../../../assets/data/class';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from "../../../../shared/components/search-input/search-input.component";

@Component({
    selector: 'app-students-and-teachers',
    standalone: true,
    imports: [
    CommonModule,
    PrincipalFormComponent,
    InputTextComponent,
    FormsModule,
    SearchInputComponent,
    SearchInputComponent
],
    templateUrl: './students-and-teachers.component.html',
    styleUrl: './students-and-teachers.component.scss'
})
export class StudentsAndTeachersComponent {
    classList = classList; //? MOCK!
    isTeacherView: boolean = false;

    setTypeUser(event: boolean) {
        this.isTeacherView = event;
    }
}
