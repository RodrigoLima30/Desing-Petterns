import type { Caixa } from "./caixa";
import type { Command } from "./command";

export class FecharContaCommand implements Command {

    constructor(private caixa: Caixa, private conta: string) {}

    executar(): void {
        this.caixa.FecharConta();
        console.log(`FecharContaCommand: Conta "${this.conta}" fechada.`);
    }

    desfazer(): void {
        console.log(`FecharContaCommand: Desfazendo o fechamento da conta "${this.conta}".`);
        // Aqui você pode implementar a lógica para reabrir a conta, se necessário.
    }

}