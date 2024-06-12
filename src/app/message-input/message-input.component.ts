import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent implements OnInit {

  formMessage!:FormGroup;
  formBuilder:FormBuilder = inject(FormBuilder);
  chat:ChatService = inject(ChatService);


  ngOnInit(): void {
    this.formMessage =this.formBuilder.group({
      message:["",Validators.required]
    });
  }

  sendMessage(){
    this.chat.addMessage(this.formMessage.controls["message"].value);
    this.formMessage.controls["message"].setValue(null);
  }


}
