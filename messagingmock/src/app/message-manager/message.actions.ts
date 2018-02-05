import {
    Action,
    ActionCreator
  } from 'redux';
  
  export const SEND: string = 'SEND';
  export const SENDING: string = 'SENDING';
  export const RECIEVED: string = 'RECIEVED';

  export const send: ActionCreator<Action> = () => ({
    type: SEND
  });
  export const sending: ActionCreator<Action> = () => ({
    type: SENDING
  });
  export const recieved: ActionCreator<Action> = () => ({
    type: RECIEVED
  });