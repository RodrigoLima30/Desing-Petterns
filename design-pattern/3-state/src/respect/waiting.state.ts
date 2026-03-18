import { Order } from "./order";
import { ORDER_STATE } from "./data";
import { PaidState } from "./paid.state";
import { CanceledState } from "./canceled.state";
import type { OrderState } from "./state";

export class WaitingState implements OrderState {
  success(order: Order): void {
    order.setState(new PaidState());
  }

  cancel(order: Order): void {
    order.setState(new CanceledState());
  }

  dispatch(order: Order): void {
    // não faz nada
  }

  getName(): string {
    return ORDER_STATE.WAITING;
  }
}
