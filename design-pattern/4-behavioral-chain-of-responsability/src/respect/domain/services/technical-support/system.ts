export type ProblemType = "CRITICAL" | "MEDIUM" | "SIMPLE" | "TRIVIAL";

export class System {
    constructor(
        public readonly type: ProblemType
    ) { }
}