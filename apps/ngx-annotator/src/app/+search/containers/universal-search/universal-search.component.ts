import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
// import * as fromRoot from '../../../reducers'
import * as fromSearch from '../../reducers'
import * as SplitActions from '../../actions/split.actions'
import * as LayoutActions from '../../../core/actions/layout.actions'
import * as fromRoot from './../../../reducers'
import * as SearchActions from '../../actions/search.actions'

@Component({
  selector: 'app-universal-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './universal-search.component.html',
  styleUrls: ['./universal-search.component.css']
})
export class UniversalSearchComponent implements OnInit {
  sizes$: Observable<number[]>
  showSearchBar$: Observable<boolean>

  constructor(private store: Store<any>) {
    this.sizes$ = store.pipe(
      select(fromSearch.getSplitFirstGutter),
      map((gutter: { drag: boolean, sizes: number[] }) => gutter.sizes)
    )
    this.showSearchBar$ = this.store.pipe(select(fromRoot.getLayoutShowSearchBar))

  }

  ngOnInit() {
  }

  splitDragStart(event) {
    this.store.dispatch(new SplitActions.DragStart(event))
  }

  splitDragEnd(event) {
    this.store.dispatch(new SplitActions.DragEnd(event))
  }

  closeSearchBar() {
    this.store.dispatch(new LayoutActions.CloseSearchBar())
  }

  openSearchBar() {
    this.store.dispatch(new LayoutActions.OpenSearchBar())
  }

  notImplementedAlert() {
    alert('Sorry! This feature is not yet available')
  }

  searchEmitterValue(event){
    console.log(event.searchValue)
    this.store.dispatch(new SearchActions.LoadSearch(event.searchValue))
  }
}
