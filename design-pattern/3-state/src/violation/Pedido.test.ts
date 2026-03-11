import { describe, expect, test } from "bun:test";
import { Pedido } from "./Pedido";

describe("Pedido", () => {
	test("aguardando", () => {
		const pedido = new Pedido();
		pedido.despacharPedido();
		pedido.sucessoAoPagar();
		expect(pedido.estadoAtual).toBe(Pedido.AGUARDANDO_PAGAMENTO);
	});

	test("sucesso", () => {
		const pedido = new Pedido();
		pedido.despacharPedido();
		pedido.sucessoAoPagar();
		expect(pedido.estadoAtual).toBe(Pedido.PAGO);
	});

	test("despachar", () => {
		const pedido = new Pedido();
		pedido.sucessoAoPagar();
		pedido.despacharPedido();
		expect(pedido.estadoAtual).toBe(Pedido.ENVIADO);
	});

	test("cancelar", () => {
		const pedido = new Pedido();
		pedido.cancelarPedido();
		expect(pedido.estadoAtual).toBe(Pedido.CANCELADO);
	});
});
