import { ChangeDetectionStrategy, Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as AuthActions from '../../../auth/actions/auth.actions'
import * as fromAuth from '../../../auth/reducers'
import * as fromRoot from '../../../reducers'
import * as LayoutActions from '../../actions/layout.actions'

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-annotator'
  showSidenav$: Observable<boolean>
  showSearchBar$: Observable<boolean>
  loggedIn$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromRoot.getLayoutShowSidenav))
    this.showSearchBar$ = this.store.pipe(select(fromRoot.getLayoutShowSearchBar))
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn))
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new LayoutActions.CloseSidenav())
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav())
  }

  closeSearchBar() {
    this.store.dispatch(new LayoutActions.CloseSearchBar())
  }

  openSearchBar() {
    this.store.dispatch(new LayoutActions.OpenSearchBar())
  }

  logout() {
    this.closeSidenav()

    this.store.dispatch(new AuthActions.Logout())
  }

  notImplementedAlert() {
    alert('Sorry! This feature is not yet available')
  }
}
