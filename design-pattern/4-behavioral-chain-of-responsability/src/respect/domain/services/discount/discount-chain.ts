import { Discount500 } from "./discount-500";
import { Discount200 } from "./discount-200";
import { Discount100 } from "./discount-100";
import { NoDiscount } from "./no-discount";
import { Order } from "./order";

export class DiscountChain {
  apply(order: Order): number {
    const d500 = new Discount500();
    const d200 = new Discount200();
    const d100 = new Discount100();
    const none = new NoDiscount();

    d500.setNext(d200);
    d200.setNext(d100);
    d100.setNext(none);

    return d500.apply(order);
  }
}
