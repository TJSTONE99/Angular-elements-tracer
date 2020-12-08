import { NgRedux } from '@angular-redux/store';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from '../../services/websocket.service';
import { MessagesActions } from '../../store/messages/message-actions';
import { IAppState } from '../../store/models';
import { UserActions } from '../../store/users/user-actions';

export interface user{
  clientID: string
  clientName: string
}
@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions:MessagesActions,
    private websocket: WebsocketService,
    private changedet: ChangeDetectorRef
    ) { }

  @Input() userID:string
  @Output() onRouteChange: EventEmitter<any> = new EventEmitter<any>();
  //$messages: Observable<[]>
  messages: Array<any> = []
  selectedUser: user = {clientID: '', clientName: ''}
  form:FormGroup = new FormGroup({
    message: new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {
    console.log(this.userID)
    this.ngRedux.dispatch(this.actions.update(UserActions.GET_USER_BY_ID, {value: this.userID['clientID']})).data
    this.ngRedux.select(state=> state.messages).subscribe(messagesarr=>{
      this.messages = messagesarr.messages || []
      this.changedet.detectChanges()
    })

    /*this.$messages = this.ngRedux.select(state=> state.messages).pipe(
      map(messages => messages.messages)
    )*/

    this.ngRedux.select(state=> state.users.chattingTo).subscribe(data=>{
      this.selectedUser = data
    })
  }

  clearDetails(): void {
    this.websocket.sendMessage('_hideDetails', {})
    this.onRouteChange.emit(0)
  }

  onSubmit(){
    if (this.form.valid){
      this.websocket.sendMessage('_sendMessageToRecipent', {recipentClientID:this.userID['clientID'], value:this.form.value.message})
      this.form.reset()
    }
  }

}
