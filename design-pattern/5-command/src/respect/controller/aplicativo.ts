import type { Command } from "./command";

export class Aplicativo {
    private comandos: Command[] = [];
    setComando(comando: Command): number {
        this.comandos.push(comando);
        return this.comandos.length - 1;
    }
    aoPrecionarBotao(id: number): void {
        this.comandos[id]!.executar();
    }
    duploCliqueBotao(id: number): void {
        this.comandos[id]!.desfazer();
    }
    getComando(id: number): Command {
        return this.comandos[id]!;
    }
}