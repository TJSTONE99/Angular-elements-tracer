import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit, OnDestroy {
  constructor(private websocket: WebsocketService) { }

  ngOnInit(): void {
    this.websocket.connect()
  }

  visible:boolean = true

  onSubmit(input:string): void{
    if (input.length>0)
    {
      this.websocket.sendMessage('_initialise', { name: input })
      this.visible = false
    }
  }

  ngOnDestroy():void{
    this.websocket.dispose()
  }

}
