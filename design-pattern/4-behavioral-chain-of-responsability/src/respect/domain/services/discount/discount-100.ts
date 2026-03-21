import { DiscountHandler } from "./discount.abstract";
import { Order } from "./order";

export class Discount100 extends DiscountHandler {
  apply(order: Order): number {
    if (order.value > 100) {
      return order.customerType === "VIP"
        ? order.value * 0.1
        : 0;
    }
    return this.next!.apply(order);
  }
}
