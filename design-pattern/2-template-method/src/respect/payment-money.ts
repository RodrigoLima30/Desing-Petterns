import { Gateway } from "./gateway";

export class PaymentMoney extends Gateway {

  public calculateTax(value: number): number {
    return 0;
  }
  public calculateDiscont(value: number): number {
    return value * 0.1;
  }
}
