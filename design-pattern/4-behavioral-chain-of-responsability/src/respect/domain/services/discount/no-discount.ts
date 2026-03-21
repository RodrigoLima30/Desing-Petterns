import { DiscountHandler } from "./discount.abstract";
import { Order } from "./order";

export class NoDiscount extends DiscountHandler {
  apply(order: Order): number {
    return 0;
  }
}
