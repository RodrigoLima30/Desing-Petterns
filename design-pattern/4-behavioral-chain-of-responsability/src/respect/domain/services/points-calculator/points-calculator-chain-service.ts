import { NoPoints } from "./points-calculator-no-point-service";
import { Points20 } from "./points-calculator-20-service";
import { Points40 } from "./points-calculator-40-service";
import { Points70 } from "./points-calculator-70-service";
import type { Order } from "../../entities/order-entity";

export class PointsCalculatorChain {
  execute(order: Order, day: number): number {
    const noPoints = new NoPoints();
    const points20 = new Points20();
    const points40 = new Points40();
    const points70 = new Points70();

    points70.setNext(points40);
    points40.setNext(points20);
    points20.setNext(noPoints);

    return points70.execute(order);
  }
}