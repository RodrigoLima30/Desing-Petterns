export class AreaTransferencia {
    private conteudo: string = "";

    copiar(texto: string): void {
        this.conteudo = texto;
    }

    colar(): string {
        return this.conteudo;
    }

    getConteudo(): string {
        return this.conteudo;
    }

    imprime(): void {
        console.log(`Área de Transferência: "${this.conteudo}"`);
    }
}
