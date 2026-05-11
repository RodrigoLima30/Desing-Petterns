import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, userRoleDefault } from "../../data/role-data";
import { User } from "../entity/user-entity";

export class UserFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: User
  
  constructor(private readonly model: User) {
    this.#role = userRoleDefault;
    this.#data = new User({
      ...this.model.toJSON(),
      role: this.#role,
    });
  }

  toJSON(): User {
    return this.#data;
  }
}