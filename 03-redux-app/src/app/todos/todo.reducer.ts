import {createReducer, on} from '@ngrx/store';
import {create, deleteCompletes, deleteTodo, edit, toggle, toggleAll} from './todo.actions';
import {Todo} from './models/Todo';

export const initialState: Todo[] = [
  new Todo('help to word'),
  new Todo('Vencer a a'),
  new Todo('Vencer a B'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteTodo, (state, {id}) => {
    return state.filter(x => x.id !== id);
  }),
  on(toggleAll, (state, {complete}) => {
    return state.map(todo => {
      return {
        ...todo,
        complete
      };
    });
  }),
  on(deleteCompletes, (state) => {
    return state.filter(x => !x.complete);
  })
);

export const todoReducer = (state, action) => _todoReducer(state, action);
