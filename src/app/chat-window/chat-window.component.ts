import { Component, effect, inject } from '@angular/core';
import { IMessages } from '../shared/interface/IMessages.interface';
import { ChatService } from '../service/chat.service';
import { Sender } from '../shared/interface/sender';
import { UserMessageComponent } from './components/user-message/user-message.component';
import { BotMessageComponent } from './components/bot-message/bot-message.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [UserMessageComponent,BotMessageComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {

  messages!:IMessages[];
  chat:ChatService = inject(ChatService);
  sender = Sender;
  constructor(){
    effect(()=>{
      this.messages = this.chat.messages();
    })
  }
}

