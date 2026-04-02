import { describe, expect, test } from "bun:test";
import { DiscountChain } from "./discount-chain";
import { Order } from "./order";

describe("Discount Chain", () => {
  test("VIP acima de 500 → 20%", () => {
    const order = new Order(600, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(600 * 0.2);
  });

  test("REGULAR acima de 500 → 10%", () => {
    const order = new Order(600, "REGULAR");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(600 * 0.1);
  });

  test("VIP acima de 200 → 15%", () => {
    const order = new Order(300, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(300 * 0.15);
  });

  test("REGULAR acima de 200 → 5%", () => {
    const order = new Order(300, "REGULAR");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(300 * 0.05);
  });

  test("VIP acima de 100 → 10%", () => {
    const order = new Order(150, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(150 * 0.1);
  });

  test("REGULAR acima de 100 → 0%", () => {
    const order = new Order(150, "REGULAR");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(0);
  });

  test("Abaixo ou igual a 100 → sem desconto", () => {
    const order = new Order(80, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(0);
  });

  test("Exatamente 100 → sem desconto", () => {
    const order = new Order(100, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(0);
  });

  test("Exatamente 200 → deve cair na regra de 100", () => {
    const order = new Order(200, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(200 * 0.1);
  });

  test("Exatamente 500 → deve cair na regra de 200", () => {
    const order = new Order(500, "VIP");
    const discount = new DiscountChain().apply(order);

    expect(discount).toBe(500 * 0.15);
  });
});
