import type { CommandFactory } from "../../domain/factory/command-factory";
import { UserRepository } from "../../infra/repository/user-repository";
import { ChangeUseCase } from "../usecase/change-usecase";
import { SignupUseCase } from "../usecase/signup-usecase";


export class UseCaseFactory {
  private userRepository = new UserRepository();

  constructor(
    private readonly commandFactory: CommandFactory
  ) {}

  makeSignup() {
    return new SignupUseCase(this.userRepository, this.commandFactory);
  }

  makeChange() {
    return new ChangeUseCase(this.userRepository, this.commandFactory);
  }
}
