import type { Command } from "./command";
import type { Documento } from "./documento";

export class InserirTextoCommand implements Command {
    private textoAnterior: string = "";

    constructor(private documento: Documento, private texto: string) {}

    executar(): void {
        this.textoAnterior = this.documento.getTexto();
        this.documento.inserirTexto(this.texto);
        this.documento.imprime();
    }

    desfazer(): void {
        this.documento.setTexto(this.textoAnterior);
        this.documento.imprime();
    }
}
