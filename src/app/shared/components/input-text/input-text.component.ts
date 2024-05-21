import { Component, Input, output } from '@angular/core';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
    selector: 'app-input-text',
    standalone: true,
    imports: [
        ComponentsModule
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
    @Input() model: string = '';
    @Input() placeholder: string = "";

    @Input() password: boolean = false;
    @Input() disabled: boolean = false;

    onChange = output()
    onBlur = output()

    passwordToggled: boolean = false;

    togglePassword() {
        this.passwordToggled = !this.passwordToggled;
    }
}
