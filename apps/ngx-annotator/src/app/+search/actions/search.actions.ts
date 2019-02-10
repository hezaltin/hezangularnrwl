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
  LoadGetSelectedSearchItem = '[Search] Get Selected Search Item details',
  LoadSearchByTelivisionSeries = '[Search] Search Documents By Telivision Series',
  LoadSearchCompleteByTelivisionSeries = '[Search] Search Documents Complete By Telivision Series',
  LoadSearchErrorByTelivisionSeries = '[Search] Search Documents Error By Telivision Series',
  LoadSearchByPeople = '[Search] Search Documents By People ',
  LoadSearchCompleteByPeople  = '[Search] Search Documents Complete By People ',
  LoadSearchErrorByPeople  = '[Search] Search Documents Error By People ',
  ResetSelectedItem = '[Search] Reset Selected Search Item Details',
  GetActiveSelectedCategory = '[Search] Set Active Selected Category',
  RemoveActiveCategory = '[Search] Remove the Active Category'

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

export class LoadSearchByTelivisionSeries implements Action {
  readonly type = SearchActionTypes.LoadSearchByTelivisionSeries

  constructor(public payload: string) {}
}

export class LoadSearchCompleteByTelivisionSeries implements Action {
  readonly type = SearchActionTypes.LoadSearchCompleteByTelivisionSeries

  constructor(public payload: any) {}
}
export class LoadSearchErrorByTelivisionSeries implements Action {
  readonly type = SearchActionTypes.LoadSearchErrorByTelivisionSeries

  constructor(public payload: any) {}
}


export class LoadSearchByPeople implements Action {
  readonly type = SearchActionTypes.LoadSearchByPeople

  constructor(public payload: string) {}
}

export class LoadSearchCompleteByPeople implements Action {
  readonly type = SearchActionTypes.LoadSearchCompleteByPeople

  constructor(public payload: any) {}
}
export class LoadSearchErrorByPeople implements Action {
  readonly type = SearchActionTypes.LoadSearchErrorByPeople

  constructor(public payload: any) {}
}

export class ResetSelectedItem implements Action {
  readonly type = SearchActionTypes.ResetSelectedItem

  constructor() {}
}

export class LoadGetSelectedSearchItem implements Action {
  readonly type = SearchActionTypes.LoadGetSelectedSearchItem

  constructor(public payload: any) {}
}

export class GetActiveSelectedCategory implements Action {
  readonly type = SearchActionTypes.GetActiveSelectedCategory

  constructor(public payload: any) {}
}

export class RemoveActiveCategory implements Action {
  readonly type = SearchActionTypes.RemoveActiveCategory

  constructor() {}
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
  |LoadSearchByTelivisionSeries
  |LoadSearchCompleteByTelivisionSeries
  |LoadSearchErrorByTelivisionSeries
  |LoadSearchByPeople
  |LoadSearchCompleteByPeople
  |LoadSearchErrorByPeople
  |ResetSelectedItem
  |GetActiveSelectedCategory
  |RemoveActiveCategory
  