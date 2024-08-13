import { CommonModule } from '@angular/common';
import { contents } from './../../../assets/data/content-item';
import { Component } from '@angular/core';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';

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
    contentsData = contents;

    private currentItem: any;
    private currentContent: string;

    onDragStart(item, content: string) {
        console.log(item, content)
        this.currentItem = item;
        this.currentContent = content;
    }

    onDrop(event: Event, content: string) {
        event.preventDefault()

        if (this.currentContent == content) {
            alert("nao pode")
            return
        }

        const items = this.contentsData[this.currentContent].items;
        console.log(items)
        console.log(this.currentItem.id)
        const index = items.findIndex(i => i.id == this.currentItem.id);
        items.splice(index, 1)

        this.contentsData[content].items.push(this.currentItem)


        this.currentItem = undefined
        this.currentContent = undefined
    }

    onDragOver(event: Event) {
        // console.log(event)
        event.preventDefault()
    }
}
