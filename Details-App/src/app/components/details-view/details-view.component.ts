import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service.service'

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  connectedClientID:string

  constructor(private websocket: WebsocketService) { }

  ngOnInit(): void {

  }

  submitSelection(value: string) :void{
    this.websocket.sendMessage('_sendMessageToRecipent', {recipentClientID:this.connectedClientID, value:`Connected User Selected : ${value}`})
  }
}
