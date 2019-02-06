import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { map, switchMap } from 'rxjs/operators'
import { Subscription, Observable } from 'rxjs'

import * as fromSearch from '../../reducers'
import * as DocumentActions from '../../actions/document.actions'
import { Store, select } from '@ngrx/store'
import { DocumentUnion } from '../../../+search/models/document.model';

@Component({
  selector: 'app-document-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnDestroy {
  actionsSubscription: Subscription

  type$: Observable<string>
  document$: Observable<DocumentUnion>
  loading$: Observable<boolean>
  error$: Observable<string>

  constructor(
    private store: Store<fromSearch.State>,
    private route: ActivatedRoute,
  ) {
    this.actionsSubscription = route.paramMap
      .pipe(map(params => new DocumentActions.Load({
        type: params.get('type'),
        id: params.get('id'),
      })))
      .subscribe(store)

    this.type$ = store.pipe(select(fromSearch.getDocumentType))
    this.document$ = store.pipe(select(fromSearch.getDocumentDocument))
    this.loading$ = store.pipe(select(fromSearch.getDocumentLoading))
    this.error$ = store.pipe(select(fromSearch.getDocumentError))
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}
