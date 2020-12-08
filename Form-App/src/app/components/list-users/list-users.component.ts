import { NgRedux } from '@angular-redux/store'
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { WebsocketService } from '../../services/websocket.service'
import { IAppState } from '../../store/models'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUsersComponent implements OnInit {
  //$users:Observable<[]> = new Observable()
  @Output() onUserSelected: EventEmitter<any> = new EventEmitter<any>()
  @Output() onRouteChange: EventEmitter<any> = new EventEmitter<any>()
  subscription: Subscription
  users: Array<any> = []
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private websocket: WebsocketService,
    private changedet: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    /*this.$users = this.ngRedux.select(state=> state.users).pipe(
      map(items => items.users)
    )*/
    this.subscription = this.ngRedux.select(state=> state.users).subscribe(items=>{
      this.users = items.users
      this.changedet.detectChanges()
    })
  }

  gotoChat(user){
    this.websocket.sendMessage('_displayDetails', { selectedClient:user.clientID })
    this.onUserSelected.emit(user)
    this.onRouteChange.emit(1)
  }

}
