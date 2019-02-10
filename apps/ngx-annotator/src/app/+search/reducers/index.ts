import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store'
import * as fromDocument from './document.reducer'
import * as fromSplit from './split.reducer'
import * as fromSearch from './search.reducer';
import * as fromRoot from '../../reducers'

export interface SearchState {
  document: fromDocument.State,
  split: fromSplit.State,
  searchDocument:fromSearch.State
}

export interface State extends fromRoot.State {
  search: SearchState
}

export const reducers: ActionReducerMap<SearchState> = {
  document: fromDocument.reducer,
  split: fromSplit.reducer,
  searchDocument:fromSearch.reducer
}

export const getSearchState = createFeatureSelector<State, SearchState>('search')
// search document state
export const getSearchDocumentState = createSelector(
  getSearchState,
  (state: SearchState) => state.searchDocument
)

export const getSearchDocumentSearchResults = createSelector(
  getSearchDocumentState,
  fromSearch.getDocumentSearch
)
export const getSearchDocumentSearchResultsByTelevision = createSelector(
  getSearchDocumentState,
  fromSearch.getDocumentSearchByTvSeries
)
export const getSearchDocumentSearchResultsByPeople = createSelector(
  getSearchDocumentState,
  fromSearch.getDocumentSearchByPeople
)
export const getSearchDocumentSelectedResult = createSelector(
  getSearchDocumentState,
  fromSearch.getSelectedResult
)
export const getActiveCategoryResult = createSelector(
  getSearchDocumentState,
  fromSearch.getActiveCategory
)

// Document State
export const getDocumentState = createSelector(
  getSearchState,
  (state: SearchState) => state.document
)

export const getDocumentType = createSelector(
  getDocumentState,
  fromDocument.getType
)

export const getDocumentId = createSelector(
  getDocumentState,
  fromDocument.getId
)

export const getDocumentDocument = createSelector(
  getDocumentState,
  fromDocument.getDocument
)

export const getDocumentLoading = createSelector(
  getDocumentState,
  fromDocument.getLoading
)

export const getDocumentError = createSelector(
  getDocumentState,
  fromDocument.getError
)

// Split State
export const getSplitState = createSelector(
  getSearchState,
  (state: SearchState) => state.split
)

export const getSplitFirstGutter = createSelector(
  getSplitState,
  fromSplit.getFirstGutter
)

// export const getSplitFirstGutterDrag = createSelector(
//   getSplitFirstGutter,
//   fromSplit.getFirstGutterDrag
// )

// export const getSplitFirstGutterSizes = createSelector(
//   getSplitFirstGutter,
//   fromSplit.getFirstGutterSizes
// )

