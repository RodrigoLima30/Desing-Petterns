import { describe, test, expect } from "bun:test";

import { UseCaseFactory } from "../application/factory/usecase-factory";
import { CommandFactory } from "../domain/factory/command-factory";

describe("SignupUseCase", () => {
  describe("should succeed", () => {

    test("employee", async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();

      const employee = await signupUseCase.execute("employee", {
        name: "Rodrigo Augusto",
        email: "employee@email.com",
      });

      expect(employee.toJSON()).toMatchObject({
        id: expect.any(String),
        name: "Rodrigo Augusto",
        email: "employee@email.com",
        role: {
          profile: "employee",
          features: [{
            feature: "uber",
            permissions: ["create", "view"],
          }, {
            feature: "alimento",
            permissions: ["create", "view"],
          }, {
            feature: "hotel",
            permissions: ["create", "view"],
          }, {
            feature: "combustivel",
            permissions: ["create", "view"],
          }],
        }
      });
    });

    test("manager", async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();

      const manager = await signupUseCase.execute("manager", {
        name: "Rodrigo Augusto",
        email: "manager@email.com",
      });

      expect(manager.toJSON()).toMatchObject({
        id: expect.any(String),
        name: "Rodrigo Augusto",
        email: "manager@email.com",
        role: {
          profile: "manager",
          features: [{
            feature: "uber",
            permissions: ["approve", "reject", "view"],
          }, {
            feature: "alimento",
            permissions: ["approve", "reject", "view"],
          }, {
            feature: "hotel",
            permissions: ["approve", "reject", "view"],
          }, {
            feature: "combustivel",
            permissions: ["approve", "reject", "view"],
          }],
        }
      });
    });

    test("director", async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();

      const director = await signupUseCase.execute("director", {
        name: "Rodrigo Augusto",
        email: "director@email.com",
      });

      expect(director.toJSON()).toMatchObject({
        id: expect.any(String),
        name: "Rodrigo Augusto",
        email: "director@email.com",
        role: {
          profile: "director",
          features: [{
            feature: "uber",
            permissions: ["create", "approve", "reject", "view"],
          }, {
            feature: "alimento",
            permissions: ["create", "approve", "reject", "view"],
          }, {
            feature: "hotel",
            permissions: ["create", "approve", "reject", "view"],
          }, {
            feature: "combustivel",
            permissions: ["create", "approve", "reject", "view"],
          }],
        }
      });
    });

  });
});