import {
    Action,
    ActionCreator
  } from 'redux';
  import { MessageState,Chat } from './chat.state';
  export const SEND: string = 'SEND';
  export const SENDING: string = 'SENDING';
  export const RECIEVED: string = 'RECIEVED';
  export const STARTED: string = 'STARTED';
  export interface AddChatAction extends Action {
    message: MessageState;
    chat:Chat
  }
  export const send: ActionCreator<AddChatAction> = (chat:Chat,message:MessageState):AddChatAction => ({
    type: SEND,
    message:message,
    chat:chat
  });
  export const sending: ActionCreator<Action> = () => ({
    type: SENDING
  });
  export const recieved: ActionCreator<Action> = (message:MessageState) => ({
    type: RECIEVED
  });
  export const started: ActionCreator<Action> = (message:MessageState) => ({
    type: STARTED
  });

