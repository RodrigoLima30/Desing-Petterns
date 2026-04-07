import type { Command } from "./command";
import type { Documento } from "./documento";
import type { Formatador } from "./formatador";


export class NegritoCommand implements Command {
    private textoAnterior: string = "";

    constructor(
        private documento: Documento,
        private formatador: Formatador
    ) {}

    executar(): void {
        this.textoAnterior = this.documento.getTexto();
        const textoFormatado = this.formatador.negrito(this.documento.getTexto());
        this.documento.setTexto(textoFormatado);
        this.documento.imprime();
    }

    desfazer(): void {
        this.documento.setTexto(this.textoAnterior);
        this.documento.imprime();
    }
}
