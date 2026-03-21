import { Order } from "./order";
import { ORDER_STATE } from "./data";
import type { OrderState } from "./state";

export class SentState implements OrderState {
  success(order: Order): void {}
  cancel(order: Order): void {}
  dispatch(order: Order): void {}

  getName(): string {
    return ORDER_STATE.SENT;
  }
}
