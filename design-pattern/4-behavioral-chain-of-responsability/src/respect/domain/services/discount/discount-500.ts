import { DiscountHandler } from "./discount.abstract";
import { Order } from "./order";

export class Discount500 extends DiscountHandler {
  apply(order: Order): number {
    if (order.value > 500) {
      return order.customerType === "VIP"
        ? order.value * 0.2
        : order.value * 0.1;
    }
    return this.next!.apply(order);
  }
}
