import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements'
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  declarations: [
    ChatViewComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [ListUsersComponent],
  //bootstrap: [ListUsersComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector) {
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(ListUsersComponent, {injector: this.inject})
    customElements.define('form-app', elem)
  }
 }
