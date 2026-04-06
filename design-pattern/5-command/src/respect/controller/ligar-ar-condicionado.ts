import type { ArCondicionado } from "./ar-condicionado";
import type { Command } from "./command";

export class LigarArCondicionado implements Command {
    private arCondicionado: ArCondicionado;
    constructor(arCondicionado: ArCondicionado) {
        this.arCondicionado = arCondicionado;
    }
    executar(): void {
        this.arCondicionado.ligar();
        this.arCondicionado.imprimeObjeto();
    }
    desfazer(): void {
        this.arCondicionado.desligar();
        this.arCondicionado.imprimeObjeto();
    }
}