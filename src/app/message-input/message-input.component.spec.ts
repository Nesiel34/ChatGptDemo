import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';
import { By } from '@angular/platform-browser';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear message input after sending message', () => {
    component.formMessage.controls["message"].setValue("Test Message");
    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    expect(component.formMessage.controls["message"].value).toEqual(null);
  });
});
