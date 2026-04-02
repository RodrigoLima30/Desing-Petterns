import { describe, expect, test } from "bun:test";
import { Pedido } from "./Pedido";

describe("Pedido", () => {
	test("inicia como aguardando pagamento", () => {
		const pedido = new Pedido();
		expect(pedido.estadoAtual).toBe(Pedido.AGUARDANDO_PAGAMENTO);
	});

	test("não despacha sem pagamento", () => {
		const pedido = new Pedido();
		pedido.despacharPedido();
		expect(pedido.estadoAtual).toBe(Pedido.AGUARDANDO_PAGAMENTO);
	});

	test("sucesso ao pagar muda para pago", () => {
		const pedido = new Pedido();
		pedido.sucessoAoPagar();
		expect(pedido.estadoAtual).toBe(Pedido.PAGO);
	});

	test("despachar após pagamento muda para enviado", () => {
		const pedido = new Pedido();
		pedido.sucessoAoPagar();
		pedido.despacharPedido();
		expect(pedido.estadoAtual).toBe(Pedido.ENVIADO);
	});

	test("cancelar enquanto aguardando muda para cancelado", () => {
		const pedido = new Pedido();
		pedido.cancelarPedido();
		expect(pedido.estadoAtual).toBe(Pedido.CANCELADO);
	});

	test("cancelar após pagamento também muda para cancelado", () => {
		const pedido = new Pedido();
		pedido.sucessoAoPagar();
		pedido.cancelarPedido();
		expect(pedido.estadoAtual).toBe(Pedido.CANCELADO);
	});

	test("não pode pagar após cancelado", () => {
		const pedido = new Pedido();
		pedido.cancelarPedido();
		pedido.sucessoAoPagar();
		expect(pedido.estadoAtual).toBe(Pedido.CANCELADO);
	});

	test("não pode despachar após cancelado", () => {
		const pedido = new Pedido();
		pedido.cancelarPedido();
		pedido.despacharPedido();
		expect(pedido.estadoAtual).toBe(Pedido.CANCELADO);
	});
});
