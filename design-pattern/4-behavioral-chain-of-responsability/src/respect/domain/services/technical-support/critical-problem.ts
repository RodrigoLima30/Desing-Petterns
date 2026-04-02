import { ProblemHandler } from "./problem.abstract";
import type { System } from "./system";

export class ProblemCritical extends ProblemHandler {
    handle(problem: System): string {
        if (problem.type === "CRITICAL") {
            return "Selected for the senior team."
        }
    return this.next!.handle(problem);
    }
}