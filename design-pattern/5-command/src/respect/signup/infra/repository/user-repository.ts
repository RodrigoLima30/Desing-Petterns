import { uuidv7 } from "uuidv7";
import { User } from "../../domain/entity/user-entity";
import { type UserProps } from "../../data/user-data";
import type { IUserRepository } from "../../domain/repository/user-repository";

export class UserRepository implements IUserRepository {
  private db: Map<string, UserProps> = new Map();

  async create(user: User): Promise<User> {
    const id = uuidv7();
    const newUser: UserProps = { ...user.toJSON(), id };
    this.db.set(id, newUser);
    return new User(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = Array.from(this.db.values()).find(u => u.email === email);
    return found ? new User(found) : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.db.get(id);
    return user ? new User(user) : null;
  }

  async update(user: User): Promise<User> {
    const data = user.toJSON();
    if (!data.id) throw new Error("User must have id");

    this.db.set(data.id, data);
    return new User(data);
  }
}
