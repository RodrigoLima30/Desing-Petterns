import type { Command } from "./command";
import type { Documento } from "./documento";

export class ApagarCaractereCommand implements Command {
    private textoAnterior: string = "";

    constructor(private documento: Documento) {}

    executar(): void {
        this.textoAnterior = this.documento.getTexto();
        this.documento.apagarUltimoCaractere();
        this.documento.imprime();
    }

    desfazer(): void {
        this.documento.setTexto(this.textoAnterior);
        this.documento.imprime();
    }
}
