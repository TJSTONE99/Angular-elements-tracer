import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { createCustomElement } from '@angular/elements'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [PopUpComponent],
  //bootstrap: [PopUpComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector) {
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(PopUpComponent, {injector: this.inject})
    customElements.define('popup-app', elem)
  }
}