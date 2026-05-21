import { describe, test, expect } from "bun:test";

import { UseCaseFactory } from "../application/factory/usecase-factory";
import { CommandFactory } from "../domain/factory/command-factory";

describe("ChangeUseCase", () => {
  describe("should succeed", () => {

    test("employee to manager", async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();
      const changeUseCase = useCaseFactory.makeChange();

      const employee = await signupUseCase.execute("employee", {
        name: "Rodrigo Augusto",
        email: "employee@email.com",
      });

      const manager = await changeUseCase.execute(
        "manager",
        employee.data.id!
      );

      expect(manager.toJSON()).toMatchObject({
        id: expect.any(String),
        name: "Rodrigo Augusto",
        email: "employee@email.com",
        role: {
          profile: "manager",
        }
      });
    });

    test("manager to director", async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();
      const changeUseCase = useCaseFactory.makeChange();

      const manager = await signupUseCase.execute("manager", {
        name: "Rodrigo Augusto",
        email: "manager@email.com",
      });

      const director = await changeUseCase.execute(
        "director",
        manager.data.id!
      );

      expect(director.toJSON()).toMatchObject({
        id: expect.any(String),
        name: "Rodrigo Augusto",
        email: "manager@email.com",
        role: {
          profile: "director",
        }
      });
    });

  });
});