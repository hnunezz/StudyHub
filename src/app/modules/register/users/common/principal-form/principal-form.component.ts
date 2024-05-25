import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-principal-form',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './principal-form.component.html',
  styleUrl: './principal-form.component.scss'
})
export class PrincipalFormComponent {

}
