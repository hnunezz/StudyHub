import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
    @Input() model: boolean;

    @Input() colorPrimary: string;
    @Input() colorSecondary: string;

    onClick = output<boolean>();

    constructor() {}

    onClickHandle() {
        this.onClick.emit(this.model);
    }
}
