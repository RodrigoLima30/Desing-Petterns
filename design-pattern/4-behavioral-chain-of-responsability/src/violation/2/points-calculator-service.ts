import type { Order } from "./order-entity";

export class PointsCalculator {
  public execute(order: Order, day: number): number {
    let points: number;
    if (order.getValue() >= 70) {
      points = Math.floor(order.getValue() / 5);
    } else if (order.getValue() >= 40) {
      points = Math.floor(order.getValue() / 7);
    } else if (order.getValue() >= 20) {
      points = Math.floor(order.getValue() / 10);
    } else {
      return 0;
    }
    if (day >= 16 && day <= 31) return points * 2;
    return points;
  }
}