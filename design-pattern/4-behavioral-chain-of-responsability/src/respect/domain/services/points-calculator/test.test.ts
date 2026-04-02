import { describe, expect, test } from "bun:test";


import { Order } from "../../entities/order-entity";
import { PointsCalculatorChain } from "./points-calculator-chain-service";

describe("Points Calculator Chain", () => {
  test("Valor >= 70 → regra Points70", () => {
    const order = new Order(100);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(100 / 5));
  });

  test("Valor >= 40 e < 70 → regra Points40", () => {
    const order = new Order(50);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(50 / 7));
  });

  test("Valor >= 20 e < 40 → regra Points20", () => {
    const order = new Order(30);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(30 / 10));
  });

  test("Valor < 20 → sem pontos", () => {
    const order = new Order(10);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(0);
  });

  /**
   * 🧠 EDGE CASES (muito importante)
   */

  test("Exatamente 70 → Points70", () => {
    const order = new Order(70);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(70 / 5));
  });

  test("Exatamente 40 → Points40", () => {
    const order = new Order(40);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(40 / 7));
  });

  test("Exatamente 20 → Points20", () => {
    const order = new Order(20);

    const points = new PointsCalculatorChain().execute(order, 10);

    expect(points).toBe(Math.floor(20 / 10));
  });

  test("Ordem da chain está correta (70 tem prioridade sobre 40)", () => {
    const order = new Order(80);

    const points = new PointsCalculatorChain().execute(order, 10);

    // Se a ordem estivesse errada, cairia no Points40
    expect(points).toBe(Math.floor(80 / 5));
  });
});
