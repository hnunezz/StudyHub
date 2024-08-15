import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum Types {
    ERROR = 0,
    SUCESSS = 1,
    WARNING = 2,
    INFO = 3,
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    public $message: Subject<any>;

  constructor() {
    this.$message = new Subject<any>();
  }

  show(message: string, type: Types, summary: string){
    this.$message.next({message, type, summary});
  }
}
