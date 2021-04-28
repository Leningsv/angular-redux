import {createReducer, on} from '@ngrx/store';
import {decrement, divide, increment, multiply, reset} from './counter.actions';


export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, props) => state * props.number),
  on(divide, (state, props) => state / props.number),
  on(reset, (state) => 0)
);

export const counterReducer = (state, action) => _counterReducer(state, action);

// export const counterReducer = (state = 10, action: Action) => {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default:
//       return state;
//   }
// };
