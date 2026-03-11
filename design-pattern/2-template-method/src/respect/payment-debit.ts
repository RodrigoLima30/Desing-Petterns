import { Gateway } from "./gateway";

export class PaymentDebit extends Gateway {
  
  public calculateTax(value: number): number {
    return 4;
  }
  public calculateDiscont(value: number): number {
    return value * 0.05;
  }
}
