/* tslint:disable:typedef */

import { Reducer,combineReducers} from 'redux';
// import { counterReducer,initialState } from './counter.reducer';
// import { counterReducer,initialState } from './counter.reducer';
import { messageReducer } from "./message-manager/message.reducer"
//export * from './counter.reducer';
import { MessageState } from './message-manager/message.state';


export * from './message-manager/message.reducer';
//merging the states
export interface AppState {
    message: MessageState;
}
//mergeing the reducers
export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    message: messageReducer,
    //flow2: flow2Reducer
});