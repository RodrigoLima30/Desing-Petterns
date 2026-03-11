export class Gateway {
	cobrar(valor: number): number {
		console.log(`R$${valor}`);
		return valor;
	}
}
