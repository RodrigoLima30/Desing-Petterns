import type { Command } from "./command";
import type { Personagem } from "./personagem";

export class InventarioCommand implements Command {
    private armaAnterior: string | null = null;

    constructor(private personagem: Personagem, private acao: string, private valor?: string) {}

    executar(): void {
        if(this.acao === "usarItem" && this.valor) {
            if(this.personagem.inventario.includes(this.valor)) {
                console.log(`${this.personagem.nome} usou o item ${this.valor}.`);
                this.personagem.inventario = this.personagem.inventario.filter(i => i !== this.valor);
            } else {
                console.log(`${this.personagem.nome} não possui o item ${this.valor}.`);
            }
        } else if(this.acao === "trocarArma" && this.valor) {
            this.armaAnterior = this.personagem.trocarArma(this.valor);
        }
    }

    desfazer(): void {
        if(this.acao === "usarItem" && this.valor) {
            this.personagem.inventario.push(this.valor!);
            console.log(`${this.personagem.nome} recuperou o item ${this.valor}.`);
        } else if(this.acao === "trocarArma") {
            if(this.armaAnterior) {
                this.personagem.armaAtual = this.armaAnterior;
                console.log(`${this.personagem.nome} voltou para a arma ${this.armaAnterior}.`);
            } else {
                this.personagem.armaAtual = null;
                console.log(`${this.personagem.nome} voltou a não ter arma equipada.`);
            }
        }
    }
}
