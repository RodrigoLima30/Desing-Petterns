import type { Caixa } from "./caixa";
import type { Command } from "./command";

export class FecharContaCommand implements Command {

    constructor(private caixa: Caixa, private conta: string) {}

    executar(): void {
        this.caixa.FecharConta(this.conta);
        console.log(`FecharContaCommand: Conta "${this.conta}" fechada.`);
    }

    desfazer(): void {
        this.caixa.reabrirConta(this.conta);
        console.log(`FecharContaCommand: Desfazendo o fechamento da conta "${this.conta}".`);
    }

}