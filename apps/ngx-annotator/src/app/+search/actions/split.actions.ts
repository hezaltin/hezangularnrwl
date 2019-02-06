import { Action } from '@ngrx/store'

export enum SplitActionTypes {
  DragStart = '[Split] Drag Start',
  DragEnd = '[Split] Drag End'
}

export class DragStart implements Action {
  readonly type = SplitActionTypes.DragStart

  constructor(public payload: {gutterNum: number, sizes: number[]}) {}
}

export class DragEnd implements Action {
  readonly type = SplitActionTypes.DragEnd

  constructor(public payload: {gutterNum: number, sizes: number[]}) {}
}

export type SplitActionsUnion = 
  | DragStart
  | DragEnd