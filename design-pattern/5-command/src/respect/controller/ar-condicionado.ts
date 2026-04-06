export class ArCondicionado {
    private identificacao: string;
    private estado: boolean;
    private temperatura: number;
    constructor(identificacao: string, estado: boolean, temperatura: number) {
        this.estado = estado;
        this.identificacao = identificacao;
        this.temperatura = temperatura;
    }
    ligar(): void { this.estado = true; }
    desligar(): void { this.estado = false; }
    setTemperatura(temperatura: number): void { this.temperatura = temperatura; }
    getIdentificacao(): string { return this.identificacao; }
    getEstado(): boolean { return this.estado; }
    getTemperatura(): number { return this.temperatura; }
    imprimeObjeto(): void {
        let identificacao = `O objeto ${this.identificacao} está ${this.estado ? "Ligado" : "Desligado"}`;
        identificacao += this.estado ? ` a ${this.temperatura} graus celsius.` : ".";
        console.log(identificacao + "<br>");
    }
}