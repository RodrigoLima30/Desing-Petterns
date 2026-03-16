import { PointCalculator } from "./point-calculator-abstract-service";

export class NoPoints extends PointCalculator {
  execute(): number {
    return 0;
  }
}