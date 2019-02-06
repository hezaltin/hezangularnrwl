import {
  LayoutActionTypes,
  LayoutActionsUnion,
} from '../actions/layout.actions'

export interface State {
  showSidenav: boolean
  showSearchBar: boolean
}

const initialState: State = {
  showSidenav: false,
  showSearchBar: false,
};

export function reducer(
  state: State = initialState,
  action: LayoutActionsUnion
): State {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        ...state,
        showSidenav: false,
      }

    case LayoutActionTypes.OpenSidenav:
      return {
        ...state,
        showSidenav: true,
      }
    
    case LayoutActionTypes.CloseSearchBar:
      return {
        ...state,
        showSearchBar: false,
      }

    case LayoutActionTypes.OpenSearchBar:
      return {
        ...state,
        showSearchBar: true,
      }

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav
export const getShowSearchBar = (state: State) => state.showSearchBar
