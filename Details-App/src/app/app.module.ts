import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, DoBootstrap } from '@angular/core';

import { createCustomElement } from '@angular/elements'
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { ApplicationRef } from '@angular/core';

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
  constructor (private injector:Injector){
    
  }
  ngDoBootstrap(appRef: ApplicationRef) {
    const elem = createCustomElement(DetailsViewComponent, {injector:this.injector})
    customElements.define('details-app', elem)
  }
 }
