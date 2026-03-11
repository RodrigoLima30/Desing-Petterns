import { describe, expect, test } from "bun:test";
import { Gateway } from "./gateway";
import { PagamentoCredito } from "./pagamento-credito";
import { PagamentoDebito } from "./pagamento-debito";
import { PagamentoDinheiro } from "./pagamento-dinheiro";

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
	test("PagamentoCredito", () => {
		const valor = 1000;
		const gateway = new Gateway();
		const pagamentoCredito = new PagamentoCredito(valor, gateway);
		expect(pagamentoCredito.realizaCobranca()).toBe(1030);
	});

	test("PagamentoDebito", () => {
		const valor = 1000;
		const gateway = new Gateway();
		const pagamentoDebito = new PagamentoDebito(valor, gateway);
		expect(pagamentoDebito.realizaCobranca()).toBe(954);
	});

	test("PagamentoDinheiro", () => {
		const valor = 1000;
		const gateway = new Gateway();
		const pagamentoDinheiro = new PagamentoDinheiro(valor, gateway);
		expect(pagamentoDinheiro.realizaCobranca()).toBe(900);
	});
});
