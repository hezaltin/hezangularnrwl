import { Action } from '@ngrx/store';
import { SearchActionTypes, SearchActions } from '../actions/search.actions';


export interface State {
 searchResults:any;
 serachResultsByTvSeries:any;
 serachResultsByPeople:any;
 loading:boolean;
 type:any;
 getSelectedSearchItem:any,
 getActiveSelectedCategory:any
}

export const initialState: State = {
  searchResults:null,
  serachResultsByTvSeries:null,
  serachResultsByPeople:null,
  loading:false,
  type:null,
  getSelectedSearchItem:null,
  getActiveSelectedCategory:null

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
    case SearchActionTypes.LoadSearchByTelivisionSeries: {
      console.log(action)
      return {
        ...state,
      }
    }

    case SearchActionTypes.LoadSearchCompleteByTelivisionSeries: {
      console.log('action===>',action)
      return {
        ...state,
        serachResultsByTvSeries: action.payload,
        loading: false,
       
      }
    }

    case SearchActionTypes.LoadSearchErrorByTelivisionSeries: {
      return {
        ...state,
        loading: false,
        
      }
    }
    case SearchActionTypes.LoadSearchByPeople: {
      console.log(action)
      return {
        ...state,
      }
    }

    case SearchActionTypes.LoadSearchCompleteByPeople: {
      console.log('action===>',action)
      let getPeopleActionPayloadResults = action.payload.results
      let peoplePayload = getPeopleActionPayloadResults.reduce((all,item,index)=>{
        let extractItemKnown = item.known_for.length > 0 ? item.known_for[0] :{} 
          all.results.push(extractItemKnown);
          return all;
      },{results:[]})
        console.log('peoplePayload==>',peoplePayload)
      return {
        ...state,
        serachResultsByPeople: peoplePayload,
        loading: false,
       
      }
    }

    case SearchActionTypes.LoadSearchErrorByPeople: {
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
    case SearchActionTypes.ResetSelectedItem: {
      console.log('action===>',action)
      return {
        ...state,
        getSelectedSearchItem: null
       
      }
    }
    case SearchActionTypes.RemoveActiveCategory: {
      console.log('action===>',action)
      return {
        ...state,
        getActiveSelectedCategory: null
       
      }
    }
    
    case SearchActionTypes.GetActiveSelectedCategory: {
      console.log('action===>',action)
      return {
        ...state,
        getActiveSelectedCategory: action.payload,
        loading: false,
       
      }
    }
    
    

    

    default:
      return state;
  }
}

export const getDocumentSearch = (state: State) => state.searchResults
export const getDocumentSearchByTvSeries = (state: State) => state.serachResultsByTvSeries
export const getDocumentSearchByPeople = (state: State) => state.serachResultsByPeople
export const getSelectedResult = (state:State) => state.getSelectedSearchItem
export const getActiveCategory = (state:State) => state.getActiveSelectedCategory
