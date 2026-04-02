import { ProblemCritical } from "./critical-problem";
import { ProblemMedium } from "./medium-problem";
import { ProblemSimple } from "./simple-problem";
import type { System } from "./system";
import { ProblemTrivial } from "./trivial-problem";

export class ProblemChain {
    handle(problem: System): string {
        const critical = new ProblemCritical();
        const medium = new ProblemMedium();
        const simple = new ProblemSimple();
        const trivial = new ProblemTrivial();

        critical.setNext(medium);
        medium.setNext(simple);
        simple.setNext(trivial);

        return critical.handle(problem);
    }
}