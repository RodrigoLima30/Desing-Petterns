import { Gateway } from "./gateway";

export class PaymentCredit extends Gateway {
  constructor() {
    super();
  }
  public calculateTax(value: number): number {
    return value * 0.05;
  }
  public calculateDiscont(value: number): number {
    if (value > 300) {
      return value * 0.02;
    }
    return 0;
  }
}
