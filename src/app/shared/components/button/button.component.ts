import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input() public label: string = '';
    @Input() public icon: string = '';
    @Input() public color: 'primary' | 'secondary' = 'primary';

    onClick = output();

    onClickHandle() {
        this.onClick.emit();
    }
}
