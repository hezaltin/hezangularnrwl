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
  documentSearchbyTvSeries$:Observable<any>
  documentSearchByPeople$:Observable<any>
  bookSelect$: Observable<any>;
  activeCategory$:Observable<any>;
  removable = true;
  fruits:any = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  selectable = true;
  constructor( private store: Store<fromSearch.State>,) { }

  ngOnInit() {

    this.documentSearch$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResults))
    this.documentSearchbyTvSeries$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResultsByTelevision))
    this.documentSearchByPeople$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResultsByPeople))
    this.bookSelect$ = this.store.pipe(select(fromSearch.getSearchDocumentSelectedResult)) as Observable<
    any
  >;
  this.activeCategory$ = this.store.pipe(select(fromSearch.getActiveCategoryResult))
  }

  selectedFromCollectionPreview(selectedItem){
      console.log(selectedItem)
       this.store.dispatch(new SearchActions.LoadGetSelectedSearchItem(selectedItem));
  }
  searchBasedOnCategory(event){
    console.log('event===>',event)
    this.store.dispatch(new SearchActions.GetActiveSelectedCategory(event))
    this.store.dispatch(new SearchActions.ResetSelectedItem())
  }

  remove(): void {
    this.store.dispatch(new SearchActions.RemoveActiveCategory())
    this.store.dispatch(new SearchActions.ResetSelectedItem())
  }

}
