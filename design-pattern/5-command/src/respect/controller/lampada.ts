export class Lampada {
    private identificacao: string;
    private estado: boolean;
    constructor(identificacao: string, estado: boolean) {
        this.estado = estado;
        this.identificacao = identificacao;
    }
    ligar(): void { this.estado = true; }
    desligar(): void { this.estado = false; }
    getIdentificacao(): string { return this.identificacao; }
    getEstado(): boolean { return this.estado; }
    imprimeObjeto(): void {
        let identificacao = `O objeto ${this.identificacao} está ${this.estado ? "Ligado" : "Desligado"}.<br>`;
        console.log(identificacao);
    }
}