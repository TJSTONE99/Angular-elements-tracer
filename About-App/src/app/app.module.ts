import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { PageComponent } from './components/page/page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [PageComponent]
  //bootstrap: [PageComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector) {
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(PageComponent, {injector: this.inject})
    customElements.define('about-app', elem)
  }
 }