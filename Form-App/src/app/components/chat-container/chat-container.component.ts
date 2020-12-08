import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatContainerComponent implements OnInit {

  constructor(private changeDet: ChangeDetectorRef) { }
  connectedUserID:string
  route:number = 0

  ngOnInit(): void {
  }

  userSelected(userID:string){
    console.log(`user selected : ${userID}`)
    this.connectedUserID = userID
  }

  routeChange(toRoute:number){
    this.route = toRoute
    this.changeDet.detectChanges()
  }

}
