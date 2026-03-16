class Pedido {
	protected valor: number;
	constructor(valor: number) {
		this.valor = valor;
	}
	getValor(): number {
		return this.valor;
	}
	setValor(valor: number): void {
		this.valor = valor;
	}
	calculaFreteComum(): number {
		return this.valor * 0.05;
	}
	calculaFreteExpresso(): number {
		return this.valor * 0.1;
	}
}

