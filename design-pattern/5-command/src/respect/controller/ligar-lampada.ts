import type { Command } from "./command";
import type { Lampada } from "./lampada";

export class LigarLampada implements Command {
    private lampada: Lampada;
    constructor(lampada: Lampada) { this.lampada = lampada; }
    executar(): void {
        this.lampada.ligar();
        this.lampada.imprimeObjeto();
    }
    desfazer(): void {
        this.lampada.desligar();
        this.lampada.imprimeObjeto();
    }
}