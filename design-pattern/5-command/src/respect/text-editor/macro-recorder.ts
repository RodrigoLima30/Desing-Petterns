import type { Command } from "./command";

export class MacroRecorder {
    private comandos: Command[] = [];

    gravar(comando: Command): void {
        this.comandos.push(comando);
    }

    executar(): void {
        this.comandos.forEach(cmd => cmd.executar());
    }

    desfazer(): void {
        [...this.comandos].reverse().forEach(cmd => cmd.desfazer());
    }
}
