import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../../../../../shared/components/input-text/input-text.component';
import { SwitchComponent } from '../../../../../shared/components/switch/switch.component';

@Component({
  selector: 'app-principal-form',
  standalone: true,
  imports: [
    CommonModule,
    InputTextComponent,
    ButtonComponent,
    SwitchComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './principal-form.component.html',
  styleUrl: './principal-form.component.scss'
})
export class PrincipalFormComponent {
    //TODO: MELHORAR ISSO AQUI!!!!!!!!!!!!!
    @Input() type: 'administrative' | 'student-teacher' = 'administrative'

    get isAdministrativeView() {
        return this.type === 'administrative';
    }
}
