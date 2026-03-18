import { Order } from "./order";
import { ORDER_STATE } from "./data";
import { SentState } from "./sent.state";
import { CanceledState } from "./canceled.state";
import type { OrderState } from "./state";

export class PaidState implements OrderState {
  success(order: Order): void {
    // já está pago
  }

  cancel(order: Order): void {
    order.setState(new CanceledState());
  }

  dispatch(order: Order): void {
    order.setState(new SentState());
  }

  getName(): string {
    return ORDER_STATE.PAID;
  }
}
