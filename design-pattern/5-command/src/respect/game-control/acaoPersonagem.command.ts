import type { Command } from "./command";
import type { Personagem } from "./personagem";

export class AcaoPersonagemCommand implements Command {
    constructor(private personagem: Personagem, private acao: string, private parametro?: string) {}

    executar(): void {
        switch(this.acao) {
            case "mover":
                this.personagem.mover(this.parametro ?? "frente");
                break;
            case "pular":
                this.personagem.pular();
                break;
            case "atacar":
                this.personagem.atacar();
                break;
            default:
                this.personagem.usarHabilidade(this.acao);
        }
    }

    desfazer(): void {
        console.log(`Desfazendo ação "${this.acao}" de ${this.personagem.nome}.`);
    }
}
