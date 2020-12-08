import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [ 
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [NavBarComponent],
  //bootstrap: [NavBarComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private inject:Injector) {
  }
  ngDoBootstrap(){
    const elem  = createCustomElement(NavBarComponent, {injector: this.inject})
    customElements.define('navbar-app', elem)
  }
}
