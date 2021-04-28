import {createReducer, on} from '@ngrx/store';
import {setFilter} from './filter.actions';

export const initialState = 'all';

const _filterReducer = createReducer(
  initialState,
  // @ts-ignore
  on(setFilter, (state, filter) => filter.filter),
);

export const filterReducer = (state, action) => {
  return _filterReducer(state, action);
};
