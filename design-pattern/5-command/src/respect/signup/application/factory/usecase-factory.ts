import { ChangeUseCase } from "../usecase/change-usecase";
import type { CommandFactory } from "../../domain/factory/command-factory";
import type { ModelFactory } from "../../infra/factory/model-factory";
import { SignupUseCase } from "../usecase/signup-usecase";

export class UseCaseFactory {
  constructor(
    private readonly modelFactory: ModelFactory,
    private readonly commandFactory: CommandFactory
  ) {}
  
  makeSignup() {
    return new SignupUseCase(this.modelFactory, this.commandFactory);
  }
  
  makeChange() {
    return new ChangeUseCase(this.modelFactory, this.commandFactory);
  }
}