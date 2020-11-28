import { NgModule } from '@angular/core'
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'
import { createLogger } from 'redux-logger'
import { IAppState } from './models'
import { rootReducer } from './reducers'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { MessagesEpics } from './messages/message-epics.service'
import { UserEpics } from './users/user-epics.service'

@NgModule({
  imports: [NgReduxModule],
  providers: [MessagesEpics, UserEpics]
})
export class ReduxStoreModule {

  constructor(
    public store: NgRedux<IAppState>,
    private MessagesEpic: MessagesEpics,
    private UserEpic: UserEpics,
    devTools: DevToolsExtension
  ) {

    const rootEpic = combineEpics<any>(
      this.MessagesEpic.sendMessage,
      this.MessagesEpic.recievedMessage,
      this.UserEpic.getAllUsers,
      this.UserEpic.addClientToRoom,
      this.UserEpic.removeClientFromRoom
    )

    const epicMiddleware = createEpicMiddleware()

    store.configureStore(
      rootReducer,
      {
        messages: {
          messages: []
        },
        users: {
          users: []
        }
      },
      [createLogger(), epicMiddleware],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    )

    epicMiddleware.run(rootEpic)
  }

}
