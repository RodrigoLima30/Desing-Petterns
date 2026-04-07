import type { Command } from "./command";

export class Toolbar {
    private comandos: Command[] = [];

    setComando(comando: Command): number {
        this.comandos.push(comando);
        return this.comandos.length - 1;
    }

    clicar(id: number): void {
        this.comandos[id]?.executar();
    }

    desfazer(id: number): void {
        this.comandos[id]?.desfazer();
    }
}
