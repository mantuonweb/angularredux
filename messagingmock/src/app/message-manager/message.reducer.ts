/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { MessageState } from './message.state';
import {
  SEND,
  SENDING,
  RECIEVED
} from './message.actions';

import { createSelector } from 'reselect';

export const messageState: MessageState = { 
    type:"string",
    time:new Date(),
    user:"string",
    action:"string" 
};

// Create our reducer that will handle changes to the state
export const messageReducer: Reducer<MessageState> =
  (state: MessageState, action: Action): MessageState => {
    switch (action.type) {
    case SEND:
      return Object.assign({}, state);
    case RECIEVED:
      return Object.assign({}, state);
    default:
      return state;
    }
};
export const getMessageState = (state): MessageState => state;

export const getCurrentMessageManager = createSelector(getMessageState,( state: MessageState ) => state );