import { Injectable } from '@angular/core'
import { ActionsObservable } from 'redux-observable'
import { UserActions } from './user-actions'

import { map, mergeMap } from 'rxjs/operators'
import { WebsocketService } from '../../services/websocket.service'

@Injectable()
export class UserEpics {

  constructor(private websocket:WebsocketService) { }
  
  getAllUsers = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(UserActions.GET_ALL_USERS)
      .pipe(
        map((response) => ({
          type: UserActions.UPDATE_USERS,
          data: {
            new: response.data,
            updated: [],
            deleted: []
          }
        }))
      )
  }

  addClientToRoom = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(UserActions.ADD_CLIENT_TO_ROOM)
      .pipe(
        map((response)=> ({
          type: UserActions.UPDATE_USERS,
          data: {
            new: response.data,
            updated: [],
            deleted: []
          }
        }))
      )
  }

  removeClientFromRoom = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(UserActions.REMOVE_CLIENT_FROM_ROOM)
      .pipe(
        map((response)=>({
          type: UserActions.UPDATE_USERS,
          data: {
            new: [],
            updated: [],
            deleted: response.data
          }
        }))
      )
  }
}