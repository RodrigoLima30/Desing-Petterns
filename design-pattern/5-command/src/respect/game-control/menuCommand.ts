import type { Command } from "./command";
import type { Menu } from "./menu";

export class MenuCommand implements Command {
    constructor(private menu: Menu, private acao: string) {}

    executar(): void {
        if(this.acao === "pausar") this.menu.pausar();
        if(this.acao === "abrirMapa") this.menu.abrirMapa();
    }

    desfazer(): void {
        console.log(`Desfazendo ação de menu "${this.acao}"`);
        this.executar(); // toggle simples
    }
}
