import { combineReducers } from 'redux'
import { createMessagesReducer } from './messages/message-reducer'
import { createUsersReducer } from './users/user-reducer'
export const rootReducer = combineReducers({
    messages: createMessagesReducer(),
    users: createUsersReducer()
})