import {Todo} from './todos/models/Todo';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {filterReducer} from './filter/filter.reducer';
import {filterType} from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: filterType;
  // Todo lo que se vaya a persistir de la aplicacion
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  todos: todoReducer,
  // @ts-ignore
  filter: filterReducer
};
