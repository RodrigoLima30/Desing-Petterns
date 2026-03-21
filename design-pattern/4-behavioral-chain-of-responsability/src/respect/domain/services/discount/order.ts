export type CustomerType = "VIP" | "REGULAR";

export class Order {
  constructor(
    public readonly value: number,
    public readonly customerType: CustomerType
  ) {}
}
