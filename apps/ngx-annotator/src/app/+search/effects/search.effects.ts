import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SearchService } from '../../core/services/search.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SearchActionTypes, LoadSearchComplete, LoadSearchError,LoadSearchCompleteByTelivisionSeries,LoadSearchErrorByTelivisionSeries,LoadSearchCompleteByPeople,LoadSearchErrorByPeople } from '../actions/search.actions';
import { of } from 'rxjs';


@Injectable()
export class SearchEffects {

  @Effect()
  search$ = this.actions$.pipe(
      ofType<any>(SearchActionTypes.LoadSearch),
      map(action => action.payload),
      switchMap((action) => {
       
        return this.searchService.getSearchResults(action).pipe(
          map((searchResults) => new LoadSearchComplete(searchResults)),
          catchError(error => of(new LoadSearchError(error)))
        );
      })
    );

    @Effect()
    searchbyTelivisionSeries$ = this.actions$.pipe(
        ofType<any>(SearchActionTypes.LoadSearchByTelivisionSeries),
        map(action => action.payload),
        switchMap((action) => {
         
          return this.searchService.getSearchResultsByTelivisionSeries(action).pipe(
            map((searchResults) => new LoadSearchCompleteByTelivisionSeries(searchResults)),
            catchError(error => of(new LoadSearchErrorByTelivisionSeries(error)))
          );
        })
      );

      @Effect()
      searchbyPeopls$ = this.actions$.pipe(
          ofType<any>(SearchActionTypes.LoadSearchByPeople),
          map(action => action.payload),
          switchMap((action) => {
           
            return this.searchService.getSearchResultsByPeople(action).pipe(
              map((searchResults) => new LoadSearchCompleteByPeople(searchResults)),
              catchError(error => of(new LoadSearchErrorByPeople(error)))
            );
          })
        );
  constructor( private actions$: Actions,
    private searchService: SearchService) {}
}
