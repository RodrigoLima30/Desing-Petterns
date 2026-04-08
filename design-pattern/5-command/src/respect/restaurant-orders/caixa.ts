export class Caixa {
    private contasFechadas: string[] = [];

    FecharConta(conta: string): void {
        this.contasFechadas.push(conta);
        console.log(`Caixa: Conta "${conta}" fechada.`);
    }

    reabrirConta(conta: string): void {
        const index = this.contasFechadas.indexOf(conta);
        if (index >= 0) {
            this.contasFechadas.splice(index, 1);
            console.log(`Caixa: Conta "${conta}" reaberta.`);
        } else {
            console.log(`Caixa: Conta "${conta}" não encontrada para reabrir.`);
        }
    }
    
}