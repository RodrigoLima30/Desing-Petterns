import type { Command } from "./command";

export class TabletGarcom {
    private fila: Command[] = [];
    private historico: Command[] = []; // para armazenar comandos enviados

    adicionarPedido(command: Command): void {
        this.fila.push(command);
        console.log("Pedido adicionado à fila.");
    }

    cancelarUltimoPedido(): void {
        const removido = this.fila.pop();
        if (removido) {
            removido.desfazer();
            console.log("Último pedido cancelado e desfeito da fila.");
        } else {
            console.log("Nenhum pedido para cancelar.");
        }
    }

    enviarPedidos(): void {
        console.log("Enviando pedidos...");
        this.fila.forEach(command => {
            command.executar();
            this.historico.push(command); // guarda no histórico
        });
        this.fila = [];
    }

    // desfazer o último comando enviado
    desfazerUltimoEnviado(): void {
        const ultimo = this.historico.pop();
        if (ultimo) {
            ultimo.desfazer();
            console.log("Último pedido enviado foi desfeito.");
        } else {
            console.log("Nenhum pedido enviado para desfazer.");
        }
    }

    listarPedidos(): void {
        console.log(`Pedidos na fila: ${this.fila.length}`);
    }

    getQuantidadePedidos(): number {
    return this.fila.length;
    }

}
