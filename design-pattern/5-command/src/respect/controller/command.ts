export interface Command {
    desfazer(): unknown;
    executar(): unknown;
}