import { Order } from "./order";

export abstract class DiscountHandler {
  protected next?: DiscountHandler;

  setNext(next: DiscountHandler): DiscountHandler {
    this.next = next;
    return next;
  }

  abstract apply(order: Order): number;
}
