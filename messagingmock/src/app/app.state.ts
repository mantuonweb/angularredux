import { MessageState } from './message-manager/message.state';
// import { Flow2State } from './flow2/flow2.state';
/*
 * minimal counter app state
 * 
 * In this case, our app state is simply a single number (the counter). But we
 * put it here because in the future, when our state is more complicated 
 * 
 */

export interface AppState {
  message: MessageState;
//   flow2: Flow1State;
}
