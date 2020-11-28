import { combineEpics } from 'redux-observable'
import { MessagesEpics } from './messages/message-epics.service'
import { UserEpics } from './users/user-epics.service'

export const rootEpic = combineEpics<any>(
  MessagesEpics,
  UserEpics
)