import type { Command } from "./command";
import type { Cozinha } from "./cozinha";

export class PrepararPratoPrincipalCommand implements Command {

    constructor(private cozinha: Cozinha, private prato: string) {}

    executar(): void {
        this.cozinha.prepararPratoPrincipal(this.prato);
    }

    desfazer(): void {
        console.log(`Desfazendo a preparação do prato "${this.prato}".`);
    }
    
}