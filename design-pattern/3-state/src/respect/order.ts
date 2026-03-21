import { ORDER_STATE } from "./data";
import type { OrderState } from "./state";
import { WaitingState } from "./waiting.state";


export class Order {
  private _state: OrderState;

  constructor() {
    this._state = new WaitingState();
  }

  get state() {
    return this._state.getName();
  }

  setState(state: OrderState) {
    this._state = state;
  }

  success() {
    this._state.success(this);
  }

  cancel() {
    this._state.cancel(this);
  }

  dispatch() {
    this._state.dispatch(this);
  }
}
