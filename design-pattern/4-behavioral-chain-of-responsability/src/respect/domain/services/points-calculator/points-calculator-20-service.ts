import { PointCalculator } from "./point-calculator-abstract-service";
import type { Order } from "../../entities/order-entity";

export class Points20 extends PointCalculator {
  execute(order: Order): number {
    if (order.value >= 20) {
      return Math.floor(order.value / 10);
    }
    return this.next!.execute(order);
  }
}