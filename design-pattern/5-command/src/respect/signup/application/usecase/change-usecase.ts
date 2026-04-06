import type { CommandFactory } from "../../domain/factory/command-factory";
import type { ModelFactory } from "../../infra/factory/model-factory";
import type { Profile } from "../../data/profile-data";
import type { User } from "../../data/user-data";
import type { UserModel } from "../../infra/model/user-model";

export class ChangeUseCase {
  private readonly userModel: UserModel
  
  constructor(private readonly modelFactory: ModelFactory, private readonly commandFactory: CommandFactory) {
    this.userModel = this.modelFactory.makeUser();
  }

  async execute(profile: Profile, id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    const command = this.commandFactory.makeFeaturesSignup(profile, user);
    const data = await this.userModel.update(command.toJSON());
    return data
  }
}