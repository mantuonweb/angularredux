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

export const chatState: ChatState = { 
    type:"",
    time:new Date(),
    messages:[],
    user:"",
    action:"" 
};

// Create our reducer that will handle changes to the state
export const chatReducer: Reducer<ChatState> =
  (state: ChatState, action: Action): ChatState => {
    switch (action.type) {
    case JOINED:
      let msg = (<ChatThreadAction>action).chat;
      return Object.assign({}, state,msg);
    case LEFT:
      return Object.assign({}, state);
    default:
      return state||chatState;
    }
};
export const getChatState = (state): ChatState => state.chat;

export const getCurrentChatManager = createSelector(getChatState,( state: ChatState ) => state );