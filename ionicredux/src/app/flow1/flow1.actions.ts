import {
  Action,
  ActionCreator
} from 'redux';

export const INC: string = 'INC';
export const increment: ActionCreator<Action> = () => ({
  type: INC
});

export const DEC: string = 'DEC';
export const decrement: ActionCreator<Action> = () => ({
  type: DEC
});
