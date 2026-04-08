import type { Command } from "./command";
import type { Cozinha } from "./cozinha";

export class PrepararSobremesaCommand implements Command {

    constructor(private cozinha: Cozinha, private sobremesa: string) {}

    executar(): void {
        this.cozinha.prepararSobremesa(this.sobremesa);
    }

    desfazer(): void {
        console.log(`Desfazendo a preparação da sobremesa "${this.sobremesa}".`);
    }

}