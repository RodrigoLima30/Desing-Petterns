import type { Gateway } from "./gateway";

export class PagamentoCredito {
	constructor(
		private readonly valor: number,
		private readonly gateway: Gateway,
	) {}
	public calcularTaxa(): number {
		return this.valor * 0.05;
	}
	public calcularDesconto(): number {
		if (this.valor > 300) {
			return this.valor * 0.02;
		}
		return 0;
	}
	public realizaCobranca(): number {
		const valorFinal =
			this.valor + this.calcularTaxa() - this.calcularDesconto();
		return this.gateway.cobrar(valorFinal);
	}
}
