import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromSearch from '../../reducers'

@Component({
  selector: 'app-entity-search-summary',
  templateUrl: './entity-search-summary.component.html',
  styleUrls: ['./entity-search-summary.component.css']
})
export class EntitySearchSummaryComponent implements OnInit {

  book$: Observable<any>;
  constructor(private store: Store<fromSearch.State>) { }

  ngOnInit() {
    this.book$ = this.store.pipe(select(fromSearch.getSearchDocumentSelectedResult)) as Observable<
    any
  >;
  }

}
