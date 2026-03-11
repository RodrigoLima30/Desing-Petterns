export abstract class Gateway {
  abstract calculateTax(value: number): number;
  abstract calculateDiscont(value: number): number;

  calculate(value: number): number {
    const valorFinal = value +
    this.calculateTax(value) - this.calculateDiscont(value);
    return valorFinal;
  }
}
