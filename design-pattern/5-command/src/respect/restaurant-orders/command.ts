export interface Command {
    desfazer(): void;
    executar(): void;
}