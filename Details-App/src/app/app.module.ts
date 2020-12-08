import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, DoBootstrap } from '@angular/core';

import { createCustomElement } from '@angular/elements'
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { ApplicationRef } from '@angular/core';
import { WebsocketService } from './services/websocket-service.service';

@NgModule({
  declarations: [
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [DetailsViewComponent],
  //bootstrap: [DetailsViewComponent]
})
export class AppModule implements DoBootstrap{
  constructor (private injector:Injector, private websocket:WebsocketService){
    this.websocket.connect()
  }
  ngDoBootstrap(appRef: ApplicationRef) {
    const elem = createCustomElement(DetailsViewComponent, {injector:this.injector})
    customElements.define('details-app', elem)
  }
 }
