export class Documento {
    private texto: string;

    constructor(textoInicial: string = "") {
        this.texto = textoInicial;
    }

    inserirTexto(novoTexto: string): void {
        this.texto += novoTexto;
    }

    apagarUltimoCaractere(): void {
        this.texto = this.texto.slice(0, -1);
    }

    getTexto(): string {
        return this.texto;
    }

    setTexto(texto: string): void {
        this.texto = texto;
    }

    imprime(): void {
        console.log(`Documento: "${this.texto}"`);
    }
}
