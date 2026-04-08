import type { Bar } from "./bar";
import type { Command } from "./command";

export class PrepararBebidaCommand implements Command {

    constructor(private bar: Bar, private bebida: string) {}

    executar(): void {
        this.bar.prepararBebida(this.bebida);
        console.log(`PrepararBebidaCommand: Bebida "${this.bebida}" em preparação.`);
    }

    desfazer(): void {
        this.bar.cancelarBebida(this.bebida);
        console.log(`Desfazendo a preparação da bebida "${this.bebida}".`);
    }

}