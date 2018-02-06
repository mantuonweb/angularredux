import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import { MessageState } from './chat-manager/chat.state'

import * as ChatAction from './chat-manager/chat.actions';
import * as UserAction from './user-manager/chat.actions';
import {
  getCurrentChatManager,getCurrentUserManager,getCurrentChatMessages
} from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message="";
  chatState:any;
  userState:any;
  state:AppState;
  messages:any[]=[];
  user:string;
  messageObj:MessageState;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.messageEvent());
    this.init();
  }
  messageEvent(){
    console.log(arguments);
    this.state = this.store.getState();
    this.chatState = getCurrentChatManager(this.state);
    this.userState = getCurrentUserManager(this.state);
    this.updateUser(this.userState);
    this.updateMessage(this.chatState);
    console.log(getCurrentChatMessages(this.state));
  }
  updateUser(userState:any){
    console.log(userState,"user")
  }
  updateMessage(messageState:any){
    console.log(messageState,"message")
  }
  init(){
    this.state = this.store.getState();
    this.userState = getCurrentUserManager(this.state);
    this.chatState = getCurrentChatManager(this.state);
  }
  sendMessage(){
    if(this.message && this.userState.user){
      this.state = this.store.getState();
      this.messageObj= { 
          type:"",
          time:new Date(),
          text:"",
          user:"",
          action:"" 
      };
      this.messageObj.text=this.message;
      this.messageObj.action = "IN";
      this.messageObj.type = "SEND";
      this.messageObj.user=this.userState.user;
      this.store.dispatch(ChatAction.send(this.chatState,this.messageObj));
      this.message="";
    }
  }
  addUser(){
    this.userState.user=this.user;
    const state = this.store.getState();
    this.store.dispatch(UserAction.joined(this.userState));
    this.user="";
  }
}
