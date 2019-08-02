import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Reducer, createStore, Store, applyMiddleware, AnyAction, compose } from 'redux';
import thunk from 'redux-thunk';
import { Action } from 'redux-actions';
import { Provider } from 'react-redux';

// StoreInterface
export interface StoreInterface {
  counter: number;
}

// reducer
const defaultState = { counter: 0 }
const reducer: Reducer<StoreInterface, Action<number>> = (
  state: StoreInterface = defaultState,
  action: Action<number>
): StoreInterface => {
  switch(action.type) {
    case 'INCREMENT':
      return { counter: ++state.counter }
    case 'DECREMENT':
      return { counter: --state.counter }
    case 'RESET':
      return { counter: 0 }
    default:
      return state
  }
}

// redux store
export const store: Store<StoreInterface, Action<number>> = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
