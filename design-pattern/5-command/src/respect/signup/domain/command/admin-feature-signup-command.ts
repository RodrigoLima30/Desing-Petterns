import type { FeaturesSignupCommand } from "../../data/command-data";
import { type Role, adminRoleDefault } from "../../data/role-data";
import { User } from "../entity/user-entity";

export class AdminFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role;
  #data: User;

  constructor(private readonly user: User) {
    this.#role = adminRoleDefault;

    this.#data = new User({
      ...this.user.toJSON(),
      role: this.#role,
    });
  }

  toJSON(): User {
    return this.#data;
  }
}