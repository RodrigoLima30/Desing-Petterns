import type { Command } from "./command";
import type { Documento } from "./documento";
import type { AreaTransferencia } from "./transfer-area";

export class CopiarCommand implements Command {

    constructor(
        private documento: Documento,
        private clipboard: AreaTransferencia
    ) {}

    executar(): void {
        const texto = this.documento.getTexto();
        this.clipboard.copiar(texto);
        this.clipboard.imprime();
    }

    desfazer(): void {
        // normalmente copiar não precisa desfazer
    }
}
