import { Action } from '@ngrx/store'

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  OpenSearchBar = '[Layout] Open SearchBar',
  CloseSearchBar = '[Layout] Close SearchBar',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class OpenSearchBar implements Action {
  readonly type = LayoutActionTypes.OpenSearchBar
}

export class CloseSearchBar implements Action {
  readonly type = LayoutActionTypes.CloseSearchBar
}

export type LayoutActionsUnion = 
  | OpenSidenav 
  | CloseSidenav
  | OpenSearchBar
  | CloseSearchBar
