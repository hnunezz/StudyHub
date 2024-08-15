import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MessageService, Types } from '../../../shared/services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
    private messageService = inject(MessageService);

    showMessage: boolean;
    message: string;
    type: string;
    summary: string;

    constructor() {
        const TypeErrors = {
            0: 'ERROR',
            1: 'SUCESS',
            2: 'WARNING',
            3: 'INFO',
        }

        this.messageService.$message.subscribe((data: {message: string, type: Types, summary: string}) => {
            this.showMessage = true;
            this.message = data.message;
            this.summary = data.summary;
            this.type = TypeErrors[data.type];

            setTimeout(() => {
                this.showMessage = false;
            }, 2800);
        })
    }

}
