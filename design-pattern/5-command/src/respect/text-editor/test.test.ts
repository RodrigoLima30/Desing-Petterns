import { describe, expect, test } from "bun:test";
import { Documento } from "./documento";
import { InserirTextoCommand } from "./inserir-texto.command";
import { ApagarCaractereCommand } from "./apagar-caractere.command";
import { AreaTransferencia } from "./transfer-area";
import { CopiarCommand } from "./copiar.command";
import { ColarCommand } from "./colar.command";
import { Formatador } from "./formatador";
import { NegritoCommand } from "./negrito.command";
import { ItalicoCommand } from "./italico.command";
import { Toolbar } from "./toolbar";
import { MacroRecorder } from "./macro-recorder";



describe("Editor Command Pattern", () => {

    test("deve inserir texto no documento", () => {
        const doc = new Documento();

        const inserir = new InserirTextoCommand(doc, "Hello");
        inserir.executar();

        expect(doc.getTexto()).toBe("Hello");
    });

    test("deve apagar último caractere", () => {
        const doc = new Documento("Hello");

        const apagar = new ApagarCaractereCommand(doc);
        apagar.executar();

        expect(doc.getTexto()).toBe("Hell");
    });

    test("deve copiar e colar texto", () => {
        const doc = new Documento("Hello");
        const clipboard = new AreaTransferencia();

        const copiar = new CopiarCommand(doc, clipboard);
        const colar = new ColarCommand(doc, clipboard);

        copiar.executar();
        colar.executar();

        expect(doc.getTexto()).toBe("HelloHello");
    });

    test("deve aplicar negrito", () => {
        const doc = new Documento("Hello");
        const formatador = new Formatador();

        const negrito = new NegritoCommand(doc, formatador);
        negrito.executar();

        expect(doc.getTexto()).toBe("**Hello**");
    });

    test("deve aplicar itálico", () => {
        const doc = new Documento("Hello");
        const formatador = new Formatador();

        const italico = new ItalicoCommand(doc, formatador);
        italico.executar();

        expect(doc.getTexto()).toBe("*Hello*");
    });

    test("deve desfazer inserção", () => {
        const doc = new Documento();

        const inserir = new InserirTextoCommand(doc, "Hello");
        inserir.executar();
        inserir.desfazer();

        expect(doc.getTexto()).toBe("");
    });

    test("toolbar deve executar comandos", () => {
        const doc = new Documento();
        const toolbar = new Toolbar();

        const inserir = new InserirTextoCommand(doc, "Hi");

        const id = toolbar.setComando(inserir);
        toolbar.clicar(id);

        expect(doc.getTexto()).toBe("Hi");
    });

    test("macro deve executar sequência de comandos", () => {
        const doc = new Documento();
        const formatador = new Formatador();
        const macro = new MacroRecorder();

        const inserir = new InserirTextoCommand(doc, "Hello");
        const negrito = new NegritoCommand(doc, formatador);

        macro.gravar(inserir);
        macro.gravar(negrito);

        macro.executar();

        expect(doc.getTexto()).toBe("**Hello**");
    });

    test("macro deve desfazer sequência", () => {
        const doc = new Documento();
        const formatador = new Formatador();
        const macro = new MacroRecorder();

        const inserir = new InserirTextoCommand(doc, "Hello");
        const negrito = new NegritoCommand(doc, formatador);

        macro.gravar(inserir);
        macro.gravar(negrito);

        macro.executar();
        macro.desfazer();

        expect(doc.getTexto()).toBe("");
    });

});
