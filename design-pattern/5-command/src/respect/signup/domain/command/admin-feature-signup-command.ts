import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, adminRoleDefault } from "../../data/role-data";
import { type User, userSchema } from "../../data/user-data";

export class AdminFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: User
  
  constructor(private readonly model: User) {
    this.#role = adminRoleDefault;
    this.#data = userSchema.parse({
      ...model,
      role: this.#role,
    })
  }

  toJSON(): User {
    return this.#data;
  }
}