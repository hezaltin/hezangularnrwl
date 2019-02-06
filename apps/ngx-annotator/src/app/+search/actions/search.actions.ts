import { Action } from '@ngrx/store'
import { DocumentUnion } from '../models/document.model'

export enum SearchActionTypes {
  GlanceEntities = '[Search] Glance Entities',
  GlanceDocuments = '[Search] Glance Documents',
  GlanceDocumentsComplete = '[Search] Glance Documents Error',
  GlanceDocumentsError = '[Search] Glance Documents Error',
  LoadSearch = '[Search] Search Documents',
  LoadSearchComplete = '[Search] Search Documents Complete',
   LoadSearchError = '[Search] Search Documents Error',
   LoadGetSelectedSearchItem = '[Search] Get Selected Search Item details'
}

export class GlanceEntities implements Action {
  readonly type = SearchActionTypes.GlanceEntities
  
  constructor(public payload: { type: string, query: string }) {}
}

export class GlanceDocuments implements Action {
  readonly type = SearchActionTypes.GlanceDocuments

  constructor(public payload: { type: string, query: string }) {}
}

export class GlanceDocumentsComplete implements Action {
  readonly type = SearchActionTypes.GlanceDocumentsComplete

  constructor(public payload: DocumentUnion) {}
}

export class GlanceDocumentsError implements Action {
  readonly type = SearchActionTypes.GlanceDocumentsError

  constructor(public payload: string) {}
}

export class LoadSearch implements Action {
  readonly type = SearchActionTypes.LoadSearch

  constructor(public payload: string) {}
}

export class LoadSearchComplete implements Action {
  readonly type = SearchActionTypes.LoadSearchComplete

  constructor(public payload: any) {}
}
export class LoadSearchError implements Action {
  readonly type = SearchActionTypes.LoadSearchError

  constructor(public payload: any) {}
}

export class LoadGetSelectedSearchItem implements Action {
  readonly type = SearchActionTypes.LoadGetSelectedSearchItem

  constructor(public payload: any) {}
}
export type SearchActions = 
  | GlanceEntities
  | GlanceDocuments
  | GlanceDocumentsComplete
  | GlanceDocumentsError
  |LoadSearch
  |LoadSearchComplete
  |LoadSearchError
  |LoadGetSelectedSearchItem
  