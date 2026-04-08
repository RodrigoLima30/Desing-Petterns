import { describe, test, expect } from "bun:test";

import { Cozinha } from "./cozinha";
import { Bar } from "./bar";
import { Caixa } from "./caixa";

import { TabletGarcom } from "./tablet-garcom";
import { PrepararPratoPrincipalCommand } from "./prepararPratoPrincipal.command";
import { PrepararSobremesaCommand } from "./PrepararSobremesa.command";
import { PrepararBebidaCommand } from "./PrepararBebida.command";
import { FecharContaCommand } from "./FecharConta.command";

describe("Sistema de Pedidos - Command Pattern (Testes completos)", () => {

  test("deve adicionar pedidos na fila corretamente", () => {
    const cozinha = new Cozinha();
    const bar = new Bar();

    const tablet = new TabletGarcom();

    tablet.adicionarPedido(new PrepararPratoPrincipalCommand(cozinha, "Picanha"));
    tablet.adicionarPedido(new PrepararBebidaCommand(bar, "Coca-Cola"));

    expect(tablet.getQuantidadePedidos()).toBe(2);
  });

  test("deve cancelar o último pedido corretamente", () => {
    const cozinha = new Cozinha();

    const tablet = new TabletGarcom();

    tablet.adicionarPedido(new PrepararPratoPrincipalCommand(cozinha, "Picanha"));
    tablet.adicionarPedido(new PrepararSobremesaCommand(cozinha, "Sorvete"));

    tablet.cancelarUltimoPedido();

    expect(tablet.getQuantidadePedidos()).toBe(1);
  });

  test("não deve quebrar ao cancelar com fila vazia", () => {
    const tablet = new TabletGarcom();

    tablet.cancelarUltimoPedido();

    expect(tablet.getQuantidadePedidos()).toBe(0);
  });

  test("deve executar todos os pedidos e limpar a fila", () => {
    const cozinha = new Cozinha();
    const bar = new Bar();
    const caixa = new Caixa();

    const tablet = new TabletGarcom();

    tablet.adicionarPedido(new PrepararPratoPrincipalCommand(cozinha, "Picanha"));
    tablet.adicionarPedido(new PrepararBebidaCommand(bar, "Coca-Cola"));
    tablet.adicionarPedido(new FecharContaCommand(caixa, "Mesa 5"));

    tablet.enviarPedidos();

    expect(tablet.getQuantidadePedidos()).toBe(0);
  });

  test("deve manter ordem de execução (FIFO)", () => {
    const ordem: string[] = [];

    // Mock simples
    const command1 = {
      executar: () => ordem.push("1"),
      desfazer: () => {}
    };

    const command2 = {
      executar: () => ordem.push("2"),
      desfazer: () => {}
    };

    const tablet = new TabletGarcom();

    tablet.adicionarPedido(command1);
    tablet.adicionarPedido(command2);

    tablet.enviarPedidos();

    expect(ordem).toEqual(["1", "2"]);
  });

});
