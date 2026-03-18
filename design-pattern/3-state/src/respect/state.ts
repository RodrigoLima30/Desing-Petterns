import type { Order } from "./order";

export interface OrderState {
  success(order: Order): void;
  cancel(order: Order): void;
  dispatch(order: Order): void;
  getName(): string;
}
