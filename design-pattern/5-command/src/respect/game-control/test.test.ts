import { describe, test, expect } from "bun:test";
import { Personagem } from "./personagem";
import { InventarioCommand } from "./inventarioCommand";
import { AcaoPersonagemCommand } from "./acaoPersonagem.command";
import { MenuCommand } from "./menuCommand";
import { InputHandler } from "./invocador";
import { Menu } from "./menu";

describe("Sistema de Jogo - Command Pattern", () => {

    test("Inventário: usar item e desfazer", () => {
        const guerreiro = new Personagem("Guerreiro", "tank");
        guerreiro.adicionarItem("Poção");

        const cmdUsarItem = new InventarioCommand(guerreiro, "usarItem", "Poção");
        cmdUsarItem.executar();

        expect(guerreiro.inventario.includes("Poção")).toBe(false);

        cmdUsarItem.desfazer();
        expect(guerreiro.inventario.includes("Poção")).toBe(true);
    });

    test("Inventário: trocar arma e desfazer", () => {
        const mago = new Personagem("Mago", "mage");
        mago.adicionarArma("Cajado");
        mago.armaAtual = "Cajado";

        const cmdTrocarArma = new InventarioCommand(mago, "trocarArma", "Cajado");
        cmdTrocarArma.executar();

        expect(mago.armaAtual).toBe("Cajado");

        cmdTrocarArma.desfazer();
        expect(mago.armaAtual).toBe("Cajado"); // volta para a arma anterior ou null
    });

    test("Personagem: executar ações", () => {
        const guerreiro = new Personagem("Guerreiro", "tank");
        const cmdMover = new AcaoPersonagemCommand(guerreiro, "mover", "direita");
        const cmdPular = new AcaoPersonagemCommand(guerreiro, "pular");

        cmdMover.executar();
        cmdPular.executar();
    });

    test("Menu: pausar e abrir mapa", () => {
        const menu = new Menu();
        const cmdPausar = new MenuCommand(menu, "pausar");
        const cmdMapa = new MenuCommand(menu, "abrirMapa");

        cmdPausar.executar();
        expect(menu.pausado).toBe(true);

        cmdPausar.desfazer();
        expect(menu.pausado).toBe(false);

        cmdMapa.executar();
        expect(menu.mapaAberto).toBe(true);

        cmdMapa.desfazer();
        expect(menu.mapaAberto).toBe(false);
    });

    test("InputHandler: fila e desfazer", () => {
        const guerreiro = new Personagem("Guerreiro", "tank");
        const cmdMover = new AcaoPersonagemCommand(guerreiro, "mover", "frente");
        const cmdPular = new AcaoPersonagemCommand(guerreiro, "pular");

        const handler = new InputHandler();
        handler.associarTecla("W", cmdMover);
        handler.associarTecla("Space", cmdPular);

        handler.executarComandos();
        handler.desfazerUltimo(); // desfaz pular
        handler.desfazerUltimo(); // desfaz mover
    });

});
