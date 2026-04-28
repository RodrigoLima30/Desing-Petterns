import type { Profile } from "../../data/profile-data";
import { User } from "../../domain/entity/user-entity";
import type { CommandFactory } from "../../domain/factory/command-factory";
import type { IUserRepository } from "../../domain/repository/user-repository";

export class ChangeUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly commandFactory: CommandFactory
  ) {}

  async execute(profile: Profile, id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    const command = this.commandFactory.makeFeaturesSignup(
      profile,
      user.toJSON()
    );

    const updatedUser = new User(command.toJSON());

    return await this.userRepository.update(updatedUser);
  }
}
