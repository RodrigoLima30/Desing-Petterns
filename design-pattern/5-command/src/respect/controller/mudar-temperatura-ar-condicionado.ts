import type { ArCondicionado } from "./ar-condicionado";
import type { Command } from "./command";

export class MudarTemperaturaArCondicionado implements Command {
    private arCondicionado: ArCondicionado;
    private temperatura: number;
    private temperaturaAnterior: number;
    constructor(arCondicionado: ArCondicionado) {
        this.arCondicionado = arCondicionado;
        this.temperatura = arCondicionado.getTemperatura();
        this.temperaturaAnterior = this.temperatura;
    }
    setTemperatura(temperatura: number): void {
        this.temperaturaAnterior = this.temperatura;
        this.temperatura = temperatura;
    }
    executar(): void {
        this.arCondicionado.setTemperatura(this.temperatura);
        this.arCondicionado.imprimeObjeto();
    }
    desfazer(): void {
        this.arCondicionado.setTemperatura(this.temperaturaAnterior);
        this.arCondicionado.imprimeObjeto();
    }
}