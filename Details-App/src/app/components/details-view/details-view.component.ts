import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WebsocketService } from '../../services/websocket-service.service'

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsViewComponent implements OnInit {
  $connectedClientID:Observable<string> = this.websocket.connectedClientID
  connectedClientID:string
  $visible:Observable<boolean> = this.websocket.displayDetails
  visible:boolean = false
  subscription: Subscription
  constructor(private websocket: WebsocketService, private changedet: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.$visible.subscribe((vis)=>{
      this.visible = vis
      this.changedet.detectChanges()
    })

    this.$connectedClientID.subscribe(id=>{
      this.connectedClientID = id
    })
  }

  submitSelection(value: string) :void{
    console.log(`sending selection to: ${this.connectedClientID}`)
    this.websocket.sendMessage('_sendMessageToRecipent', {recipentClientID:this.connectedClientID, value:`Connected User Selected : ${value}`})
  }
}
