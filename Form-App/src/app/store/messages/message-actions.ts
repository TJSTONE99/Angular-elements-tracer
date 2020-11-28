import { Injectable } from '@angular/core';

@Injectable()
export class MessagesActions {

  static GET_ALL_SENT_MESSAGES = 'GET_ALL_SENT_MESSAGES'
  static SEND_MESSAGE = 'SEND_MESSAGE'
  static RECIEVED_MESSAGE = 'RECIEVED_MESSAGE'

  update(action: string, payload: any) {
    return { type: action, data: payload }
  }
}
