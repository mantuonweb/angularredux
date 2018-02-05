import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as Flow1Action from './flow1/flow1.actions';
import * as Flow2Action from './flow2/flow2.actions';
import {
  getCurrentFlow1,
  getCurrentFlow2
} from './app.reducer';
// import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  flow1:any;
  flow2:any;
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
    this.updateState();
  }

  updateState() {
    const state = this.store.getState();
    this.flow1 = getCurrentFlow1(state);
    this.flow2 = getCurrentFlow2(state);
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.flow1.counter;
  }

  increment() {
    this.store.dispatch(Flow1Action.increment(this.flow1));
    this.store.dispatch(Flow2Action.increment(this.flow2));
  }

  decrement() {
    this.store.dispatch(Flow1Action.decrement(this.flow1));
    this.store.dispatch(Flow2Action.decrement(this.flow2));
  }
}
