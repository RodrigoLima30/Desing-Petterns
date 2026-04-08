export class Menu {
    public pausado = false;
    public mapaAberto = false;

    pausar() {
        this.pausado = !this.pausado;
        console.log(`Jogo ${this.pausado ? "pausado" : "resumido"}.`);
    }

    abrirMapa() {
        this.mapaAberto = !this.mapaAberto;
        console.log(`Mapa ${this.mapaAberto ? "aberto" : "fechado"}.`);
    }
}
