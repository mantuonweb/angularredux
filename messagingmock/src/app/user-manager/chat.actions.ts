import {
    Action,
    ActionCreator
} from 'redux';
import { UserState } from './chat.state';
export const JOINED: string = 'JOINED';
export const LEFT: string = 'LEFT';

export interface ChatThreadAction extends Action {
user: UserState;
}
export const joined: ActionCreator<ChatThreadAction> = (user:UserState):ChatThreadAction => ({
type: JOINED,
user:user
});
export const left: ActionCreator<Action> = () => ({
type: LEFT
});