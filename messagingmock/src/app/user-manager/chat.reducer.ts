/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { UserState } from './chat.state';
import {
  JOINED,
  LEFT,
  ChatThreadAction
} from './chat.actions';

import { createSelector } from 'reselect';

export const userState: UserState = { 
    type:"",
    user:"",
    action:"" 
};

// Create our reducer that will handle changes to the state
export const userReducer: Reducer<UserState> =
  (state: UserState, action: Action): UserState => {
    switch (action.type) {
    case JOINED:
      let msg = (<ChatThreadAction>action).user;
      return Object.assign({}, state,msg);
    case LEFT:
      return Object.assign({}, state);
    default:
      return state||userState;
    }
};
export const getUserState = (state): UserState => state.user;

export const getCurrentUserManager = createSelector(getUserState,( state: UserState ) => state );