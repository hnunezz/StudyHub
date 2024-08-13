import { Component, Input, output } from '@angular/core';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
    selector: 'app-search-input',
    standalone: true,
    imports: [ComponentsModule],
    templateUrl: './search-input.component.html',
    styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
    @Input() model: string = '';
    @Input() placeholder: string = "Pesquisar";

    @Input() disabled: boolean = false;

    onChange = output()
    onBlur = output()
}
