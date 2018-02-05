/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { MessageState } from './message.state';
import {
  SEND,
  SENDING,
  RECIEVED,
  AddMessageAction
} from './message.actions';

import { createSelector } from 'reselect';

export const messageState: MessageState = { 
    type:"",
    time:new Date(),
    text:"",
    user:"",
    action:"" 
};

// Create our reducer that will handle changes to the state
export const messageReducer: Reducer<MessageState> =
  (state: MessageState, action: Action): MessageState => {
    switch (action.type) {
    case SEND:
      let msg = (<AddMessageAction>action).message;
      return Object.assign({}, state,msg);
    case RECIEVED:
      return Object.assign({}, state);
    default:
      return state||messageState;
    }
};
export const getMessageState = (state): MessageState => state;

export const getCurrentMessageManager = createSelector(getMessageState,( state: MessageState ) => state );