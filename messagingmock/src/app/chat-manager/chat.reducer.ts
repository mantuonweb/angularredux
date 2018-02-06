/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { ChatState } from './chat.state';
import {
  JOINED,
  LEFT,
  ChatThreadAction
} from './chat.actions';

import { createSelector } from 'reselect';

export const messageState: ChatState = { 
    type:"",
    time:new Date(),
    messages:[],
    user:"",
    action:"" 
};

// Create our reducer that will handle changes to the state
export const messageReducer: Reducer<ChatState> =
  (state: ChatState, action: Action): ChatState => {
    switch (action.type) {
    case JOINED:
      let msg = (<ChatThreadAction>action).chat;
      return Object.assign({}, state,msg);
    case LEFT:
      return Object.assign({}, state);
    default:
      return state||messageState;
    }
};
export const getMessageState = (state): ChatState => state;

export const getCurrentMessageManager = createSelector(getMessageState,( state: MessageState ) => state );