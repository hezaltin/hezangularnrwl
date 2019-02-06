import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { DocumentActionTypes, Load, LoadComplete, LoadError } from '../actions/document.actions'
import { map, switchMap, catchError } from 'rxjs/operators'
import { DocumentService } from '../../core/services/document.service'
import { DocumentUnion } from '../models/document.model'
import { of } from 'rxjs'

@Injectable()
export class DocumentEffects {

  @Effect()
  search$ = this.actions$.pipe(
      ofType<Load>(DocumentActionTypes.Load),
      map(action => action.payload),
      switchMap((doc: { type: string, id: string }) => {
        const uri = `/${doc.type}/${doc.id}`
        return this.documentService.retriveDocument(uri).pipe(
          map((document: DocumentUnion) => new LoadComplete(document)),
          catchError(error => of(new LoadError(error)))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private documentService: DocumentService
  ) {}
}
