import { Action } from '@ngrx/store'
import { DocumentActionTypes, DocumentActionsUnion } from '../actions/document.actions'
import { DocumentUnion } from '../models/document.model'


export interface State {
  type: string
  id: string
  document: DocumentUnion
  loading: boolean
  error: string
}

export const initialState: State = {
  type: null,
  id: null,
  document: null,
  loading: false,
  error: ''
}

export function reducer(state = initialState, action: DocumentActionsUnion): State {
  switch (action.type) {
    case DocumentActionTypes.Load: {
      return {
        ...state,
        type: action.payload.type,
        id: action.payload.id,
        loading: true,
        error: '',
      }
    }

    case DocumentActionTypes.LoadComplete: {
      return {
        ...state,
        document: action.payload,
        loading: false,
        error: '',
      }
    }

    case DocumentActionTypes.LoadError: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    default:
      return state
  }
}

export const getType = (state: State) => state.type
export const getId = (state: State) => state.id
export const getDocument = (state: State) => state.document
export const getLoading = (state: State) => state.loading
export const getError = (state: State) => state.error
