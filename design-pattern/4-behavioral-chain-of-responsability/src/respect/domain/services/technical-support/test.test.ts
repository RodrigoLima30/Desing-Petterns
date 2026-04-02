import { describe, expect, test } from "bun:test";
import { ProblemChain } from "./problem.chain";
import { System } from "./system";


describe("Support System - Chain of Responsibility", () => {

  test("should handle CRITICAL problem", () => {
    const chain = new ProblemChain();
    const problem = new System("CRITICAL");

    const result = chain.handle(problem);

    expect(result).toBe("Selected for the senior team.");
  });

  test("should handle MEDIUM problem", () => {
    const chain = new ProblemChain();
    const problem = new System("MEDIUM");

    const result = chain.handle(problem);

    expect(result).toBe("Handled by intermediate support.");
  });

  test("should handle SIMPLE problem", () => {
    const chain = new ProblemChain();
    const problem = new System("SIMPLE");

    const result = chain.handle(problem);

    expect(result).toBe("Resolved by basic support.");
  });

  test("should handle TRIVIAL problem", () => {
    const chain = new ProblemChain();
    const problem = new System("TRIVIAL");

    const result = chain.handle(problem);

    expect(result).toBe("Ignored or self-resolved.");
  });

});
