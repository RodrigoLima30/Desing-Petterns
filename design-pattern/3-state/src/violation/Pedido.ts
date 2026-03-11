export class Pedido {
	static readonly AGUARDANDO_PAGAMENTO = 1;
	static readonly PAGO = 2;
	static readonly CANCELADO = 3;
	static readonly ENVIADO = 4;

	public estadoAtual: number;

	public constructor() {
		this.estadoAtual = Pedido.AGUARDANDO_PAGAMENTO;
	}

	public sucessoAoPagar(): void {
		if (this.estadoAtual === Pedido.AGUARDANDO_PAGAMENTO) {
			this.estadoAtual = Pedido.PAGO;
		}
	}

	public cancelarPedido(): void {
		if (this.estadoAtual === Pedido.AGUARDANDO_PAGAMENTO) {
			this.estadoAtual = Pedido.CANCELADO;
		} else if (this.estadoAtual === Pedido.PAGO) {
			this.estadoAtual = Pedido.CANCELADO;
		}
	}

	public despacharPedido(): void {
		if (this.estadoAtual === Pedido.PAGO) {
			this.estadoAtual = Pedido.ENVIADO;
		}
	}
}
