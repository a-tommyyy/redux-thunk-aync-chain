import React, { FunctionComponent } from 'react';
import './App.css';
import { HandleThunkActionCreator, connect } from 'react-redux';
import { StoreInterface } from '.';
import { incrementCounter, resetCounter, decrementCounter } from './actions';

interface Props {
  counter: number;
  increment: HandleThunkActionCreator<typeof incrementCounter>;
  decrement: HandleThunkActionCreator<typeof decrementCounter>;
  reset: HandleThunkActionCreator<typeof resetCounter>;
}

const mapStateToProps = (state: StoreInterface) => ({
  counter: state.counter,
})

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
  reset: resetCounter,
}

const App: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          IncrementalCounterApp
        </p>
        <h2>{props.counter}</h2>
        <button onClick={() => props.increment()}>increment</button>
        <button onClick={() => props.decrement()}>decrement</button>
        <button onClick={() => props.reset()}>reset</button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
