/* tslint:disable:typedef */

import { Reducer,combineReducers} from 'redux';
import { chatReducer } from "./chat-manager/chat.reducer"
import { ChatState } from './chat-manager/chat.state';
import { userReducer } from "./user-manager/chat.reducer"
import { UserState } from './user-manager/chat.state';
import { AppState } from './app.state';


export * from './chat-manager/chat.reducer';
export * from './user-manager/chat.reducer';
//merging the states
//mergeing the reducers
export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    chat: chatReducer,
    user:userReducer,
});