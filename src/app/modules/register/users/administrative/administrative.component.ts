import { Component } from '@angular/core';
import { PrincipalFormComponent } from '../principal-form/principal-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrative',
  standalone: true,
  imports: [
    CommonModule,
    PrincipalFormComponent
  ],
  templateUrl: './administrative.component.html',
  styleUrl: './administrative.component.scss'
})
export class AdministrativeComponent {

}
