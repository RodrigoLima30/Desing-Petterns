import { UseCaseFactory } from "./application/factory/usecase-factory";
import { CommandFactory } from "./domain/factory/command-factory";

// factories
const commandFactory = new CommandFactory();
const useCaseFactory = new UseCaseFactory(commandFactory);

// ======================================
// CREATE EMPLOYEE
// ======================================

const signupUseCase = useCaseFactory.makeSignup();

const employee = await signupUseCase.execute("employee", {
  name: "Rodrigo Augusto",
  email: "rodrigo@email.com",
});

console.log("employee", employee.toJSON());

// ======================================
// CHANGE EMPLOYEE -> MANAGER
// ======================================

const changeUseCase = useCaseFactory.makeChange();

const manager = await changeUseCase.execute(
  "manager",
  employee.data.id!
);

console.log("manager", manager.toJSON());

// ======================================
// CHANGE MANAGER -> DIRECTOR
// ======================================

const director = await changeUseCase.execute(
  "director",
  manager.data.id!
);

console.log("director", director.toJSON());