/* tslint:disable:typedef */

import { Reducer,combineReducers} from 'redux';
// import { counterReducer,initialState } from './counter.reducer';
// import { counterReducer,initialState } from './counter.reducer';
import {flow1Reducer} from "./flow1/flow1.reducer"
import {flow2Reducer} from "./flow2/flow2.reducer"
//export * from './counter.reducer';
import { Flow1State } from './flow1/flow1.state';
import { Flow2State } from './flow2/flow2.state';

//merging the states
export interface AppState {
    flow1: Flow1State;
    flow2: Flow1State;
}
//mergeing the reducers
export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    flow1: flow1Reducer,
    flow2: flow2Reducer
});

