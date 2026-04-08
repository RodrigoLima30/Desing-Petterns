import type { Bar } from "./bar";
import type { Command } from "./command";

export class PrepararBebidaCommand implements Command {

    constructor(private bar: Bar, private bebida: string) {}

    executar(): void {
        this.bar.prepararBebida(this.bebida);
    }

    desfazer(): void {
        console.log(`Desfazendo a preparação da bebida "${this.bebida}".`);
    }

}