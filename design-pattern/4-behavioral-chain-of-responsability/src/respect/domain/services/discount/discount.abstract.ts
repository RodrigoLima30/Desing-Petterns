import { Order } from "./order";

export abstract class DiscountHandler {
  protected next?: DiscountHandler; // ou protected next: DiscountHandler | undefined; - Pode ser undefined ou não definido

  setNext(next: DiscountHandler): DiscountHandler {
    this.next = next;
    return next;
  }

  abstract apply(order: Order): number;
}
