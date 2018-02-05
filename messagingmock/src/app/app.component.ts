import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';

import * as MessageAction from './message-manager/message.actions';
import {
  getCurrentMessageManager
} from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message="";
  messageState:any;
  messages:any[]=[];
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.messageEvent());
    this.init();
  }
  messageEvent(){
    this.messages.push(Object.assign({},this.messageState.message));
  }
  init(){
    const state = this.store.getState();
    this.messageState = getCurrentMessageManager(state);
  }
  sendMessage(){
    this.messageState.message.text=this.message;
    this.store.dispatch(MessageAction.send(this.messageState));
    this.message="";
  }
}
