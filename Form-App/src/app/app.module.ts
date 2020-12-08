import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { ReduxStoreModule } from './store/module'
import { FlexLayoutModule } from '@angular/flex-layout';

import { createCustomElement } from '@angular/elements'
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MessagesActions } from './store/messages/message-actions';
import { UserActions } from './store/users/user-actions';
import { WebsocketService } from './services/websocket.service';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';

@NgModule({
  declarations: [
    ChatViewComponent,
    ListUsersComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    ReduxStoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [MessagesActions, UserActions],
  entryComponents: [ChatContainerComponent],
  //bootstrap: [ChatContainerComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector, private websocket: WebsocketService) {
    this.websocket.connect()
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(ChatContainerComponent, {injector: this.inject})
    customElements.define('form-app', elem)
  }
 }
