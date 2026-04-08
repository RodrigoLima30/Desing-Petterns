import type { Command } from "./command";
import type { Cozinha } from "./cozinha";

export class PrepararSobremesaCommand implements Command {

    constructor(private cozinha: Cozinha, private sobremesa: string) {}

    executar(): void {
        this.cozinha.prepararSobremesa(this.sobremesa);
        console.log(`PrepararSobremesaCommand: Sobremesa "${this.sobremesa}" em preparação.`);
    }

    desfazer(): void {
        this.cozinha.cancelarPrato(this.sobremesa);
        console.log(`Desfazendo a preparação da sobremesa "${this.sobremesa}".`);
    }

}