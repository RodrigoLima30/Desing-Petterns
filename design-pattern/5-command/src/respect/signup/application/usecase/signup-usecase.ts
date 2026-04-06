import type { CommandFactory } from "../../domain/factory/command-factory";
import type { ModelFactory } from "../../infra/factory/model-factory";
import type { Profile } from "../../data/profile-data";
import type { User } from "../../data/user-data";
import type { UserModel } from "../../infra/model/user-model";

export class SignupUseCase {
  private readonly userModel: UserModel
  
  constructor(private readonly modelFactory: ModelFactory, private readonly commandFactory: CommandFactory) {
    this.userModel = this.modelFactory.makeUser();
  }

  async execute(profile: Profile, user: User): Promise<User> {
    const existingUser = await this.userModel.findByEmail(user.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }
    const command = this.commandFactory.makeFeaturesSignup(profile, user);
    const data = await this.userModel.create(command.toJSON());
    return data
  }
}