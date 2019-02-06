import { Action } from '@ngrx/store'
import { DocumentUnion } from '../models/document.model'

export enum DocumentActionTypes {
  Load = '[Document] Load',
  LoadComplete = '[Document] Load Complete',
  LoadError = '[Document] Load Error',
}

export class Load implements Action {
  readonly type = DocumentActionTypes.Load
  
  constructor(public payload: { type: string, id: string }) {}
}

export class LoadComplete implements Action {
  readonly type = DocumentActionTypes.LoadComplete

  constructor(public payload: DocumentUnion) {}
}

export class LoadError implements Action {
  readonly type = DocumentActionTypes.LoadError
  
  constructor(public payload: string) {}
}

export type DocumentActionsUnion = 
  | Load
  | LoadComplete
  | LoadError
