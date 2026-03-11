import { describe, expect, test } from "bun:test";
import { Gateway } from "./gateway";
import { PaymentCredit } from "./payment-credit";
import { PaymentDebit } from "./payment-debit";
import { PaymentMoney } from "./payment-money";

/*
  Regras

  Taxas:
  Crédito: 5% sobre o valor;
  Débito: R$ 4 fixos;
  Dinheiro: Sem taxa.

  Descontos:
  Crédito: 2% para valores > R$ 300;
  Débito: 5% sobre o valor;
  Dinheiro: 10% sobre o valor.
*/

describe("Gateway", () => {
  test("PaymentCredit", () => {
    const paymentCredit = new PaymentCredit();
    const finalValue = paymentCredit.calculate(1000);
    expect(finalValue).toBe(1030);
  });

  test("PaymentDebit", () => {
    const paymentDebit = new PaymentDebit();
    const finalValue = paymentDebit.calculate(1000);
    expect(finalValue).toBe(954);
  });

  test("PaymentMoney", () => {
    const paymentMoney = new PaymentMoney();
    const finalValue = paymentMoney.calculate(1000);
    expect(finalValue).toBe(900);
  });
});
