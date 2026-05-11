import type { FeatureExpenseCommand } from "../../data/command-data";
import { directorRoleDefault, type Role } from "../../data/role-data";
import { userSchema } from "../../data/user-data";
import { User } from "../entity/user-entity";

export class DirectorFeatureExpenseCommand implements FeatureExpenseCommand {
  #role: Role;
  #data: User;

  constructor(private readonly model: User) {
    this.#role = directorRoleDefault;
    this.#data = new User({
      ...this.model.toJSON(),
      role: this.#role,
    });
  }

  toJSON(): User {
    return this.#data;
  }
}
