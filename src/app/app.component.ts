import { Component } from '@angular/core';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputComponent } from './message-input/message-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatWindowComponent,MessageInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
