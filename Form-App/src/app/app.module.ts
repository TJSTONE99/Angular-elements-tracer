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

@NgModule({
  declarations: [
    ChatViewComponent,
    ListUsersComponent
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
  entryComponents: [ListUsersComponent],
  bootstrap: [ListUsersComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector) {
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(ListUsersComponent, {injector: this.inject})
    customElements.define('form-app', elem)
  }
 }
