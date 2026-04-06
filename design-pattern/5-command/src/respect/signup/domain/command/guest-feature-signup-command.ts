import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, guestRoleDefault } from "../../data/role-data";
import { type User, userSchema } from "../../data/user-data";

export class GuestFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: User
  
  constructor(private readonly model: User) {
    this.#role = guestRoleDefault;
    this.#data = userSchema.parse({
      ...model,
      role: this.#role,
    })
  }

  toJSON(): User {
    return this.#data;
  }
}