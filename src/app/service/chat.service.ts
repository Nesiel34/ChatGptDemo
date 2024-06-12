import { Injectable, signal } from '@angular/core';
import { IMessages } from '../shared/interface/IMessages.interface';
import { Sender } from '../shared/interface/sender';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  messages = signal<IMessages[]>([] as IMessages[]);
  constructor() { }



  addMessage(question:string){
    this.setMessage(question,Sender.user);
    this.setMessage(`ans:${question}`,Sender.bot)
  }

  private setMessage(question:string,sender:string){
    this.messages.set(
      [...
      this.messages(),
      {
        text:question,
        sender:sender
      }
    ]);
  }


}
