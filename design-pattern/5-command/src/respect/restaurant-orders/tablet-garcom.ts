import type { Command } from "./command";

export class TabletGarcom {
    private fila: Command[] = [];

    adicionarPedido(command: Command): void {
        this.fila.push(command);
        console.log("Pedido adicionado à fila.");
    }

    cancelarUltimoPedido(): void {
        const removido = this.fila.pop();
        if (removido) {
            console.log("Último pedido removido da fila.");
        } else {
            console.log("Nenhum pedido para cancelar.");
        }
    }

    enviarPedidos(): void {
        console.log("\n📦 Enviando pedidos...\n");

        this.fila.forEach(command => {
            command.executar();
        });

        this.fila = []; // limpa fila após envio
    }

    listarPedidos(): void {
        console.log(`Pedidos na fila: ${this.fila.length}`);
    }

    getQuantidadePedidos(): number {
    return this.fila.length;
    }

}
