export class Bar {
    private bebidasPreparando: string[] = [];

    prepararBebida(bebida: string): void {
        this.bebidasPreparando.push(bebida);
        console.log(`Bar: Preparando a bebida "${bebida}".`);
    }

    cancelarBebida(bebida: string): void {
        const index = this.bebidasPreparando.indexOf(bebida);
        if (index >= 0) {
            this.bebidasPreparando.splice(index, 1);
            console.log(`Bar: Cancelada a bebida "${bebida}".`);
        } else {
            console.log(`Bar: Bebida "${bebida}" não encontrada para cancelar.`);
        }
    }
    
}