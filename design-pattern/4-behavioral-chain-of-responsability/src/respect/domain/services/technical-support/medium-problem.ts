import { ProblemHandler } from "./problem.abstract";
import type { System } from "./system";

export class ProblemMedium extends ProblemHandler {
    handle(problem: System): string {
        if (problem.type === "MEDIUM") {
            return "Handled by intermediate support."
        }
        return this.next!.handle(problem);
    }
}