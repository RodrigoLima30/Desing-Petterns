import { ProblemHandler } from "./problem.abstract";
import type { System } from "./system";

export class ProblemTrivial extends ProblemHandler {
  handle(problem: System): string {
    return "Ignored or self-resolved.";
  }
}
