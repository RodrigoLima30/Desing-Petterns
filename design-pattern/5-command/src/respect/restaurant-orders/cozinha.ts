export class Cozinha {
    private pratosPreparando: string[] = [];

    prepararPratoPrincipal(prato: string): void {
        this.pratosPreparando.push(prato);
        console.log(`Cozinha: Preparando o prato "${prato}".`);
    }

    prepararSobremesa(sobremesa: string): void {
        this.pratosPreparando.push(sobremesa);
        console.log(`Cozinha: Preparando a sobremesa "${sobremesa}".`);
    }

    cancelarPrato(prato: string): void {
        const index = this.pratosPreparando.indexOf(prato);
        if (index >= 0) {
            this.pratosPreparando.splice(index, 1);
            console.log(`Cozinha: Cancelado o prato "${prato}".`);
        } else {
            console.log(`Cozinha: Prato "${prato}" não encontrado para cancelar.`);
        }
    }
    
}