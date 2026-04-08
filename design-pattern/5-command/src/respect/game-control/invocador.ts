import type { Command } from "./command";

export class InputHandler {
    private fila: Command[] = [];
    private historico: Command[] = [];

    associarTecla(tecla: string, comando: Command) {
        this.fila.push(comando);
    }

    executarComandos(): void {
        this.fila.forEach(c => {
            c.executar();
            this.historico.push(c);
        });
        this.fila = [];
    }

    desfazerUltimo(): void {
        const ultimo = this.historico.pop();
        if(ultimo) {
            ultimo.desfazer();
        } else {
            console.log("Nenhum comando para desfazer.");
        }
    }
}
