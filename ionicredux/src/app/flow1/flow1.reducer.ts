/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { Flow1State } from './flow1.state';
import {
  INC,
  DEC
} from './flow1.actions';
import { createSelector } from 'reselect';
export const initialStateFlow1: Flow1State = { counter: 0 };

// Create our reducer that will handle changes to the state
export const flow1Reducer: Reducer<Flow1State> =
  (state: Flow1State = initialStateFlow1, action: Action): Flow1State => {
    switch (action.type) {
    case INC:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case DEC:
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
    }
  };

export const getFlow1State = (state): Flow1State => state.flow1;

export const getCurrentFlow1 = createSelector(getFlow1State,( state: Flow1State ) => {
  console.log(state);
  return state && state.counter;
} );
