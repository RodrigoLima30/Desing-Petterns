import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, userRoleDefault } from "../../data/role-data";
import { type User, userSchema } from "../../data/user-data";

export class UserFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: User
  
  constructor(private readonly model: User) {
    this.#role = userRoleDefault;
    this.#data = userSchema.parse({
      ...model,
      role: this.#role,
    })
  }

  toJSON(): User {
    return this.#data;
  }
}