import { CommonModule } from '@angular/common';
import { contents } from './../../../assets/data/content-item';
import { Component, inject } from '@angular/core';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';
import { MessageService } from '../../shared/services/message.service';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        CommonModule,
        SearchInputComponent
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
})
export class ContentComponent {
    private messageService = inject(MessageService);

    private currentItem: any;
    private currentContent: string;

    contentsData = contents;

    onDragStart(item, content: string) {
        this.currentItem = item;
        this.currentContent = content;
    }

    onDrop(event: Event, content: string) {
        event.preventDefault()

        if (this.currentContent == content) {
            this.messageService.show("Não é permitido a ordenação da coluna, utilize os filtros.", 0, "Erro");
            return;
        }

        const items = this.contentsData[this.currentContent].items;
        const index = items.findIndex(i => i.id == this.currentItem.id);
        items.splice(index, 1)

        this.contentsData[content].items.push(this.currentItem)

        this.currentItem.showClass = false
        this.currentItem = undefined
        this.currentContent = undefined
    }

    onDragOver(event: Event) {
        event.preventDefault()
    }
}
