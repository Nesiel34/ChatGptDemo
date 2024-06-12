import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send message and receive response', () => {
    const message = 'Hi there';

    service.addMessage(message);
      expect(service.messages()[1].sender).toBe("bot");
      expect(service.messages()[1].text).toBe(`ans:${message}`);

    });
});
