import type { FeatureExpenseCommand } from "../../data/command-data";
import { managerRoleDefault, type Role } from "../../data/role-data";
import { User } from "../entity/user-entity";

export class ManagerFeatureExpenseCommand implements FeatureExpenseCommand {
  #role: Role;
  #data: User;

  constructor(private readonly model: User) {
    this.#role = managerRoleDefault;
    this.#data = new User({
      ...this.model.toJSON(),
      role: this.#role,
    });
  }

  toJSON(): User {
    return this.#data;
  }
}
