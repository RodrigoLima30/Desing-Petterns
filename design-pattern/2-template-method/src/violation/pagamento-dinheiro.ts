import type { Gateway } from "./gateway";

export class PagamentoDinheiro {
	constructor(
		private readonly valor: number,
		private readonly gateway: Gateway,
	) {}
	public calcularTaxa(): number {
		return 0;
	}
	public calcularDesconto(): number {
		return this.valor * 0.1;
	}
	public realizaCobranca(): number {
		const valorFinal =
			this.valor + this.calcularTaxa() - this.calcularDesconto();
		return this.gateway.cobrar(valorFinal);
	}
}
