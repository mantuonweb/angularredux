/* tslint:disable:typedef */

import { Reducer,combineReducers} from 'redux';
import { messageReducer } from "./message-manager/message.reducer"
import { MessageState } from './message-manager/message.state';
import { chatReducer } from "./chat-manager/chat.reducer"
import { ChatState } from './chat-manager/chat.state';
import { AppState } from './app.state';


export * from './message-manager/message.reducer';
export * from './chat-manager/chat.reducer';
//merging the states
//mergeing the reducers
export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    message: messageReducer,
    chat:chatReducer,
});