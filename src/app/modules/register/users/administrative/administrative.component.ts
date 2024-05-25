import { Component } from '@angular/core';
import { PrincipalFormComponent } from '../common/principal-form/principal-form.component';

@Component({
  selector: 'app-administrative',
  standalone: true,
  imports: [
    PrincipalFormComponent
  ],
  templateUrl: './administrative.component.html',
  styleUrl: './administrative.component.scss'
})
export class AdministrativeComponent {

}
