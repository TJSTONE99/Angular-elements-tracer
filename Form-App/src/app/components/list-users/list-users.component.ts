import { NgRedux } from '@angular-redux/store'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { IAppState } from '../../store/models'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    ) {
  }
  $users:Observable<[]>

  ngOnInit(): void {
    this.$users = this.ngRedux.select(state=> state.users).pipe(
      map(items => items.users)  
    )
  }

  gotoChat(user){
  }

}
