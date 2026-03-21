import { DiscountHandler } from "./discount.abstract";
import { Order } from "./order";

export class Discount200 extends DiscountHandler {
  apply(order: Order): number {
    if (order.value > 200) {
      return order.customerType === "VIP"
        ? order.value * 0.15
        : order.value * 0.05;
    }
    return this.next!.apply(order);
  }
}
