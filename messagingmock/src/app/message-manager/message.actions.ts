import {
    Action,
    ActionCreator
  } from 'redux';
  import { MessageState } from './message.state';
  export const SEND: string = 'SEND';
  export const SENDING: string = 'SENDING';
  export const RECIEVED: string = 'RECIEVED';

  export interface AddMessageAction extends Action {
    message: MessageState;
  }
  export const send: ActionCreator<AddMessageAction> = (message:MessageState):AddMessageAction => ({
    type: SEND,
    message:message
  });
  export const sending: ActionCreator<Action> = () => ({
    type: SENDING
  });
  export const recieved: ActionCreator<Action> = (message:MessageState) => ({
    type: RECIEVED
  });