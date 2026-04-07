export class Formatador {

    negrito(texto: string): string {
        return `**${texto}**`;
    }

    italico(texto: string): string {
        return `*${texto}*`;
    }

    imprime(texto: string): void {
        console.log(`Texto formatado: "${texto}"`);
    }
}
