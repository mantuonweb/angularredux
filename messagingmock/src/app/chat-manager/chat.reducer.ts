/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { ChatState,Chat,MessageState } from './chat.state';
import {
  SEND,
  SENDING,
  RECIEVED,
  STARTED,
  AddChatAction
} from './chat.actions';

import { createSelector } from 'reselect';

export const chatState: ChatState = { 
    chats:[]
};

function addChat(message:MessageState,chatstate:ChatState){
  let item = chatstate.chats.find(item=>{
    return item.user==message.user;
  });
  if(!item){
      let chat:Chat={
        chatid:1,
        type:"string",
        user:message.user,
        Messages:[message]
    };
    chatstate.chats.push(chat);
  }
  else{
    item.Messages.push(message);
  }
  return chatstate
}


// Create our reducer that will handle changes to the state
export const chatReducer: Reducer<ChatState> =
  (state: ChatState, action: Action): ChatState => {
    switch (action.type) {
    case SEND:
      let msg = (<AddChatAction>action).message;
      return  addChat(msg,state);
    case RECIEVED:
      return Object.assign({}, state);
    case STARTED:
      return Object.assign({}, state);
    default:
      return state||chatState;
    }
};
export const getChatState = (state): ChatState => state.chat;

export const getCurrentChatManager = createSelector(getChatState,( state: ChatState ) => state );

export const getMessageAll = (state): any => {
   let user = state.user;
   let chat = state.chat;
   let item = chat.chats.find(item=>{
    return item.user==user.user;
  });
  return item && item.Messages;
};

export const getCurrentChatMessages = createSelector(getMessageAll,( state: ChatState ) => state );