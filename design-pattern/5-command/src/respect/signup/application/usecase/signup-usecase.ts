
import type { Profile } from "../../data/profile-data";
import type { UserProps } from "../../data/user-data";
import { User } from "../../domain/entity/user-entity";
import type { CommandFactory } from "../../domain/factory/command-factory";
import type { IUserRepository } from "../../domain/repository/user-repository";

export class SignupUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly commandFactory: CommandFactory
  ) {}

  async execute(profile: Profile, input: UserProps): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(input.email);

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const command = this.commandFactory.makeFeaturesSignup(profile, input);

    const user = new User(command.toJSON());

    return await this.userRepository.create(user);
  }
}
