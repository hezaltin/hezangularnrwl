import { Component, OnInit, Input } from '@angular/core'
import * as fromSearch from '../../reducers'
import { Store, select } from '@ngrx/store'
import { Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-iframe-container',
  templateUrl: './iframe-container.component.html',
  styleUrls: ['./iframe-container.component.css']
})
export class IframeContainerComponent implements OnInit {
  @Input() url: string
  drag$: Observable<boolean>

  constructor(
    private store: Store<fromSearch.State>,
  ) {
    this.drag$ = store.pipe(
      select(fromSearch.getSplitFirstGutter),
      map((gutter: { drag: boolean, sizes: number[] }) => gutter.drag)
    )
  }

  ngOnInit() {
  }

}
