import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket'
import { environment } from '../../environments/environment'

declare global {
  interface Window { ws: WebSocketSubject<message> }
}

export interface message{
  action:string,
  params?:{}
}


@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  constructor() { }

  private socket$!: WebSocketSubject<message>
  public isConnected = false
  private timeout: any


  public connect(): void {
    clearTimeout(this.timeout)
    if (window.ws){
      this.socket$ = window.ws
    }
    else
    {
      this.socket$ = new WebSocketSubject(environment.websocketConnectionURL)
      window.ws = this.socket$
    }

    this.socket$
      .subscribe(
        (message:any) => {
        },
        (err) => {
          this.isConnected = false
          this.dispose()
          // console.error('Websocket Error', err)
          this.timeout = setTimeout(() => {
            this.connect()
          }, 2000)
        }
      )
    this.isConnected = true
  }

  public sendMessage(_action:string, process?:{}): void{
    this.socket$.next({
      action:_action,
      params: process
    })
  }

  public disconnect(): void {
    this.dispose()
  }

  public dispose(): void {
    this.socket$.unsubscribe()
    this.isConnected = false
  }

}
