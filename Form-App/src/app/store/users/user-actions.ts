import { Injectable } from '@angular/core';

@Injectable()
export class UserActions {

  static GET_ALL_USERS = 'GET_ALL_USERS'
  static UPDATE_USERS = 'UPDATE_USERS'
  static GET_USER_BY_ID = 'GET_USER_BY_ID'
  static ADD_CLIENT_TO_ROOM = 'ADD_CLIENT_TO_ROOM'
  static REMOVE_CLIENT_FROM_ROOM = 'REMOVE_CLIENT_FROM_ROOM'

  update(action: string, payload: any) {
    return { type: action, data: payload }
  }
}
