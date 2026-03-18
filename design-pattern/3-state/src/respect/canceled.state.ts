import { Order } from "./order";

import { ORDER_STATE } from "./data";
import type { OrderState } from "./state";

export class CanceledState implements OrderState {
  success(order: Order): void {}
  cancel(order: Order): void {}
  dispatch(order: Order): void {}

  getName(): string {
    return ORDER_STATE.CANCELED;
  }
}
