import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { StoreInterface } from ".";
import { Action } from "redux";
import { createAction } from "redux-actions";

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const reset     = createAction('RESET')

export const incrementCounter = (): 
ThunkAction<void, StoreInterface, {}, Action<any>> => (
  dispatch: ThunkDispatch<StoreInterface, {}, Action<any>>,
) => {
  console.info('increment')
  dispatch(increment())
}

export const decrementCounter = ():
ThunkAction<void, StoreInterface, {}, Action<any>> => (
  dispatch: ThunkDispatch<StoreInterface, {}, Action<any>>,
) => {
  console.info('decrement')
  dispatch(decrement())
}

export const resetCounter = ():
ThunkAction<void, StoreInterface, {}, Action<any>> => (
  dispatch: ThunkDispatch<StoreInterface, {}, Action<any>>,
) => {
  console.info('reset')
  dispatch(reset())
}
