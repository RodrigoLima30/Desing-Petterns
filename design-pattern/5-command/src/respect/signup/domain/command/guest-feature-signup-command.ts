import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, guestRoleDefault } from "../../data/role-data";
import { type UserProps, userSchema } from "../../data/user-data";

export class GuestFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: UserProps
  
  constructor(private readonly model: UserProps) {
    this.#role = guestRoleDefault;
    this.#data = userSchema.parse({
      ...model,
      role: this.#role,
    })
  }

  toJSON(): UserProps {
    return this.#data;
  }
}