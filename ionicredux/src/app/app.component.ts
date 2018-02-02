import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import * as Flow1Action from './flow1/flow1.actions';
import * as Flow2Action from './flow2/flow2.actions';
// import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.flow1.counter;
  }

  increment() {
    this.store.dispatch(Flow1Action.increment());
    this.store.dispatch(Flow2Action.increment());
  }

  decrement() {
    this.store.dispatch(Flow1Action.decrement());
    this.store.dispatch(Flow2Action.decrement());
  }
}
