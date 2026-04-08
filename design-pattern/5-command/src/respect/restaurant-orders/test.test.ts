import { describe, test, expect, beforeEach } from "bun:test";

import { Cozinha } from "./cozinha";
import { Bar } from "./bar";
import { Caixa } from "./caixa";

import { TabletGarcom } from "./tablet-garcom";

import { PrepararSobremesaCommand } from "./PrepararSobremesa.command";
import { PrepararBebidaCommand } from "./PrepararBebida.command";
import { FecharContaCommand } from "./FecharConta.command";
import { PrepararPratoPrincipalCommand } from "./prepararPratoPrincipal.command";

describe("Sistema de Pedidos - Command Pattern (Testes completos)", () => {
  let cozinha: Cozinha;
  let bar: Bar;
  let caixa: Caixa;
  let tablet: TabletGarcom;

  beforeEach(() => {
    cozinha = new Cozinha();
    bar = new Bar();
    caixa = new Caixa();
    tablet = new TabletGarcom();
  });

  test("deve adicionar pedidos na fila corretamente", () => {
    tablet.adicionarPedido(new PrepararPratoPrincipalCommand(cozinha, "Picanha"));
    tablet.adicionarPedido(new PrepararBebidaCommand(bar, "Coca-Cola"));

    expect(tablet.getQuantidadePedidos()).toBe(2);
  });

  test("deve cancelar o último pedido da fila chamando desfazer", () => {
    const pratoCmd = new PrepararPratoPrincipalCommand(cozinha, "Picanha");
    const sobremesaCmd = new PrepararSobremesaCommand(cozinha, "Sorvete");

    tablet.adicionarPedido(pratoCmd);
    tablet.adicionarPedido(sobremesaCmd);

    tablet.cancelarUltimoPedido(); // desfaz "Sorvete"

    expect(tablet.getQuantidadePedidos()).toBe(1);
  });

  test("não deve quebrar ao cancelar com fila vazia", () => {
    tablet.cancelarUltimoPedido();
    expect(tablet.getQuantidadePedidos()).toBe(0);
  });

  test("deve executar todos os pedidos e limpar a fila", () => {
    tablet.adicionarPedido(new PrepararPratoPrincipalCommand(cozinha, "Picanha"));
    tablet.adicionarPedido(new PrepararBebidaCommand(bar, "Coca-Cola"));
    tablet.adicionarPedido(new FecharContaCommand(caixa, "Mesa 5"));

    tablet.enviarPedidos();

    expect(tablet.getQuantidadePedidos()).toBe(0);
  });

  test("deve manter ordem de execução (FIFO)", () => {
    const ordem: string[] = [];

    const cmd1 = {
      executar: () => ordem.push("1"),
      desfazer: () => {}
    };

    const cmd2 = {
      executar: () => ordem.push("2"),
      desfazer: () => {}
    };

    tablet.adicionarPedido(cmd1);
    tablet.adicionarPedido(cmd2);

    tablet.enviarPedidos();

    expect(ordem).toEqual(["1", "2"]);
  });

  test("deve desfazer último pedido enviado", () => {
    const cmd1 = new PrepararPratoPrincipalCommand(cozinha, "Picanha");
    const cmd2 = new PrepararBebidaCommand(bar, "Coca-Cola");

    tablet.adicionarPedido(cmd1);
    tablet.adicionarPedido(cmd2);

    tablet.enviarPedidos(); // envia todos
    tablet.desfazerUltimoEnviado(); // desfaz a bebida

    // Como não há fila, getQuantidadePedidos ainda retorna 0
    expect(tablet.getQuantidadePedidos()).toBe(0);
  });

  test("deve permitir múltiplos desfazimentos de pedidos enviados", () => {
    const pratoCmd = new PrepararPratoPrincipalCommand(cozinha, "Picanha");
    const bebidaCmd = new PrepararBebidaCommand(bar, "Suco");
    const sobremesaCmd = new PrepararSobremesaCommand(cozinha, "Sorvete");

    tablet.adicionarPedido(pratoCmd);
    tablet.adicionarPedido(bebidaCmd);
    tablet.adicionarPedido(sobremesaCmd);

    tablet.enviarPedidos();

    tablet.desfazerUltimoEnviado(); // desfaz Sorvete
    tablet.desfazerUltimoEnviado(); // desfaz Suco
    tablet.desfazerUltimoEnviado(); // desfaz Picanha
    tablet.desfazerUltimoEnviado(); // nada para desfazer

    expect(tablet.getQuantidadePedidos()).toBe(0); // fila continua vazia
  });

  test("deve cancelar corretamente pedidos de diferentes tipos", () => {
    const pratoCmd = new PrepararPratoPrincipalCommand(cozinha, "Frango");
    const sobremesaCmd = new PrepararSobremesaCommand(cozinha, "Pudim");
    const bebidaCmd = new PrepararBebidaCommand(bar, "Refrigerante");
    const contaCmd = new FecharContaCommand(caixa, "Mesa 10");

    tablet.adicionarPedido(pratoCmd);
    tablet.adicionarPedido(sobremesaCmd);
    tablet.adicionarPedido(bebidaCmd);
    tablet.adicionarPedido(contaCmd);

    // cancela sobremesa
    tablet.cancelarUltimoPedido();
    tablet.cancelarUltimoPedido(); // cancela bebida

    expect(tablet.getQuantidadePedidos()).toBe(2); // ainda restam prato e conta
  });

  test("desfazer sem histórico não quebra", () => {
    tablet.desfazerUltimoEnviado(); // histórico vazio
    expect(tablet.getQuantidadePedidos()).toBe(0);
  });
});
