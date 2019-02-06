import { Action, createSelector } from '@ngrx/store'
import { SplitActionTypes, SplitActionsUnion } from '../actions/split.actions'

export interface State {
  [key: string]: { drag: boolean, sizes: number[] }
}

export const initialState: State = {
  1: { drag: false, sizes: [50, 50] }
};

export function reducer(state = initialState, action: SplitActionsUnion): State {
  switch (action.type) {
    case SplitActionTypes.DragStart: {
      const gutterNum = action.payload.gutterNum.toString()
      const sizes = action.payload.sizes
      return {
        ...state,
        [gutterNum]: { drag: true, sizes: sizes }
      }
    }

    case SplitActionTypes.DragEnd: {
      const gutterNum = action.payload.gutterNum.toString()
      const sizes = action.payload.sizes
      return {
        ...state,
        [gutterNum]: { drag: false, sizes: sizes }
      }
    }

    default:
      return state;
  }
}

export const getFirstGutter = (state: State) => state['1']
// export const getFirstGutterDrag = createSelector(
//   getFirstGutter,
//   (gutter: { drag: boolean, sizes: number[] }) => gutter.drag
// )
// export const getFirstGutterSizes = createSelector(
//   getFirstGutter,
//   (gutter: { drag: boolean, sizes: number[] }) => gutter.sizes
// )
