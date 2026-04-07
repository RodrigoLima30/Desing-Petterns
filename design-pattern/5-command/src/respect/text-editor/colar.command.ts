import type { Command } from "./command";
import type { Documento } from "./documento";
import type { AreaTransferencia } from "./transfer-area";

export class ColarCommand implements Command {
    private textoAnterior: string = "";

    constructor(
        private documento: Documento,
        private clipboard: AreaTransferencia
    ) {}

    executar(): void {
        this.textoAnterior = this.documento.getTexto();
        const texto = this.clipboard.colar();
        this.documento.inserirTexto(texto);
        this.documento.imprime();
    }

    desfazer(): void {
        this.documento.setTexto(this.textoAnterior);
        this.documento.imprime();
    }
}
