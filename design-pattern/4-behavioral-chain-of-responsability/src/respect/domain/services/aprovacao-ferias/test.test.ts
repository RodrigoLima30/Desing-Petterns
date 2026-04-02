import { describe, expect, test } from "bun:test";

import { VacationRequest } from "./request";
import { ApprovalChain } from "./approval-chain";

describe("Vacation Approval Chain", () => {

  test("Mais de 20 dias (MANAGER) → CEO", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(25, "MANAGER");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo CEO");
  });

  test("Mais de 20 dias (EMPLOYEE) → RH", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(25, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo RH");
  });

  test("Mais de 10 dias (EMPLOYEE) → Manager", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(15, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo Manager");
  });

  test("Mais de 10 dias (INTERN) → RH", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(15, "INTERN");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo RH");
  });

  test("Mais de 5 dias → Supervisor", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(7, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo Supervisor");
  });

  test("Até 5 dias → automático", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(3, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado automaticamente");
  });

  test("Exatamente 5 dias → automático", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(5, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado automaticamente");
  });

  test("Exatamente 10 dias → Supervisor", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(10, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo Supervisor");
  });

  test("Exatamente 20 dias → regra de 10 dias (Manager)", () => {
    const chain = new ApprovalChain();
    const request = new VacationRequest(20, "EMPLOYEE");

    const result = chain.execute(request);

    expect(result).toBe("Aprovado pelo Manager");
  });

});
