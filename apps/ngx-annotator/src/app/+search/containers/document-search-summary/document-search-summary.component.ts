import { Component, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs'

import * as fromSearch from '../../reducers'
import * as SearchActions from '../../actions/search.actions'
import { Store, select } from '@ngrx/store'

@Component({
  selector: 'app-document-search-summary',
  templateUrl: './document-search-summary.component.html',
  styleUrls: ['./document-search-summary.component.css']
})
export class DocumentSearchSummaryComponent implements OnInit {
  documentSearch$:Observable<any>
  constructor( private store: Store<fromSearch.State>,) { }

  ngOnInit() {

    this.documentSearch$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResults))
  }

  selectedFromCollectionPreview(selectedItem){
      console.log(selectedItem)
       this.store.dispatch(new SearchActions.LoadGetSelectedSearchItem(selectedItem));
  }

}
