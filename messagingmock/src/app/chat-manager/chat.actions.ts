import {
    Action,
    ActionCreator
} from 'redux';
import { ChatState } from './chat.state';
export const JOINED: string = 'JOINED';
export const LEFT: string = 'LEFT';

export interface ChatThreadAction extends Action {
chat: ChatState;
}
export const joined: ActionCreator<ChatThreadAction> = (chat:ChatState):ChatThreadAction => ({
type: JOINED,
chat:chat
});
export const left: ActionCreator<Action> = () => ({
type: LEFT
});