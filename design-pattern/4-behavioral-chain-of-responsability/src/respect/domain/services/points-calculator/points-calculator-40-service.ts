import { PointCalculator } from "./point-calculator-abstract-service";
import type { Order } from "../../entities/order-entity";

export class Points40 extends PointCalculator {
  execute(order: Order): number {
    if (order.value >= 40) {
      return Math.floor(order.value / 7);
    }
    return this.next!.execute(order);
  }
}