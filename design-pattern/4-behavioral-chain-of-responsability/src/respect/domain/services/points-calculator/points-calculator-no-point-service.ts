import type { Order } from "../../entities/order-entity";
import { PointCalculator } from "./point-calculator-abstract-service";

export class NoPoints extends PointCalculator {
  execute(order: Order): number {
    return 0;
  }
}
