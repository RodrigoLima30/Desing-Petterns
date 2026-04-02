import { ProblemHandler } from "./problem.abstract";
import type { System } from "./system";

export class ProblemSimple extends ProblemHandler {
    handle(problem: System): string {
        if (problem.type === "SIMPLE") {
            return "Resolved by basic support."
        }
        return this.next!.handle(problem);
    }
}