/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { Flow1State } from './flow1.state';
import {
  INCREMENT,
  DECREMENT
} from './flow1.actions';

export const initialState: Flow1State = { counter: 0 };

// Create our reducer that will handle changes to the state
export const flow1Reducer: Reducer<Flow1State> =
  (state: Flow1State = initialState, action: Action): Flow1State => {
    switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };
