import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
    @Input() model: boolean;
    @Input() theme: boolean = false;

    onClick = output<boolean>();

    onClickHandle() {
        this.onClick.emit(this.model);
    }
}
