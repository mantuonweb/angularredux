/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { Flow2State } from './flow2.state';
import {
  INCREMENT,
  DECREMENT
} from './flow2.actions';

export const initialState: Flow2State = { counter: 0 };

// Create our reducer that will handle changes to the state
export const flow2Reducer: Reducer<Flow2State> =
  (state: Flow2State = initialState, action: Action): Flow2State => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };
