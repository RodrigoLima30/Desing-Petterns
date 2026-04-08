export class Personagem {
    public inventario: string[] = [];
    public armas: string[] = [];
    public armaAtual: string | null = null;

    constructor(public nome: string, public tipo: string) {}

    mover(direcao: string) {
        console.log(`${this.nome} se moveu para ${direcao}.`);
    }

    pular() {
        console.log(`${this.nome} pulou.`);
    }

    atacar() {
        if(this.armaAtual) {
            console.log(`${this.nome} atacou com ${this.armaAtual}.`);
        } else {
            console.log(`${this.nome} atacou com as mãos.`);
        }
    }

    usarHabilidade(habilidade: string) {
        console.log(`${this.nome} usou a habilidade ${habilidade}.`);
    }

    adicionarItem(item: string) {
        if(!this.inventario.includes(item)) this.inventario.push(item);
        console.log(`${this.nome} recebeu o item: ${item}`);
    }

    trocarArma(novaArma: string): string | null {
        if (!this.armas.includes(novaArma)) {
            console.log(`${this.nome} não possui a arma ${novaArma}.`);
            return null;
        }
        const armaAnterior = this.armaAtual;
        this.armaAtual = novaArma;
        console.log(`${this.nome} trocou a arma de ${armaAnterior ?? "nenhuma"} para ${novaArma}.`);
        return armaAnterior ?? null;
    }

    adicionarArma(arma: string) {
        if (!this.armas.includes(arma)) {
            this.armas.push(arma);
            console.log(`${this.nome} adicionou a arma: ${arma}`);
        }
    }
}
