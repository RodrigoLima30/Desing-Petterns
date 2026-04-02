import type { System } from "./system";

export abstract class ProblemHandler {
    protected next?: ProblemHandler; // ou protected next: ProblemHandler | undefined; - Pode ser undefined ou não definido

    setNext(next: ProblemHandler): ProblemHandler {
        this.next = next;
        return next;
    }

    abstract handle(problem: System): string;
}