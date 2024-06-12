import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bot-message',
  standalone: true,
  imports: [],
  templateUrl: './bot-message.component.html',
  styleUrl: './bot-message.component.scss'
})
export class BotMessageComponent {

  @Input() text!:string;

}
