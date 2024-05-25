import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../../../../shared/components/input-text/input-text.component';
import { SwitchComponent } from '../../../../shared/components/switch/switch.component';

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

    typeUserToggle = output<boolean>();
    typeUserValue: boolean = false;

    get isAdministrativeView() {
        return this.type === 'administrative';
    }

    toggleTypeUser(event: boolean) {
        this.typeUserValue = event
        this.typeUserToggle.emit(event);
    }
}
