import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';

import * as MessageAction from './message-manager/message.actions';
import * as ChatAction from './chat-manager/chat.actions';
import {
  getCurrentMessageManager,getCurrentChatManager
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
  chatState:any;
  state:AppState;
  messages:any[]=[];
  user:string;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.messageEvent());
    this.init();
  }
  messageEvent(){
    console.log(arguments);
    if(this.state.type=="message"){
      this.messages.push(Object.assign({},this.messageState));
    }

  }
  init(){
    this.state = this.store.getState();
    this.messageState = getCurrentMessageManager(this.state);
    this.chatState = getCurrentChatManager(this.state);

  }
  sendMessage(){
    this.state = this.store.getState();
    this.state.type = "message";
    this.messageState.text=this.message;
    this.store.dispatch(MessageAction.send(this.messageState));
    this.message="";
  }
  addUser(){
    this.chatState.user=this.user;
    const state = this.store.getState();
    state.type = "chat";
    this.store.dispatch(ChatAction.joined(this.chatState));
    this.user="";
  }
}
