import { Action } from '@ngrx/store';
import { SearchActionTypes, SearchActions } from '../actions/search.actions';


export interface State {
 searchResults:any;
 loading:boolean;
 type:any;
 getSelectedSearchItem:any
}

export const initialState: State = {
  searchResults:null,
  loading:false,
  type:null,
  getSelectedSearchItem:null

};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActionTypes.LoadSearch: {
      console.log(action)
      return {
        ...state,
      }
    }

    case SearchActionTypes.LoadSearchComplete: {
      console.log('action===>',action)
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
       
      }
    }

    case SearchActionTypes.LoadSearchError: {
      return {
        ...state,
        loading: false,
        
      }
    }

    case SearchActionTypes.LoadGetSelectedSearchItem: {
      console.log('action===>',action)
      return {
        ...state,
        getSelectedSearchItem: action.payload,
        loading: false,
       
      }
    }

    

    default:
      return state;
  }
}

export const getDocumentSearch = (state: State) => state.searchResults
export const getSelectedResult = (state:State) => state.getSelectedSearchItem
