import type { Order } from "../../entities/order-entity";

export abstract class PointCalculator {
  protected next: PointCalculator | undefined;
  setNext(next: PointCalculator): PointCalculator {
    this.next = next;
    return this.next;
  }
  abstract execute(order: Order): number;
}