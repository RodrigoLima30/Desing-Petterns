import { PointCalculator } from "./point-calculator-abstract-service";
import type { Order } from "../../entities/order-entity";

export class Points70 extends PointCalculator {
  execute(order: Order): number {
    if (order.value >= 70) {
      return Math.floor(order.value / 5);
    }
    return this.next!.execute(order);
  }
}