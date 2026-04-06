import { uuidv7 } from "uuidv7";
import { type User, userSchema } from "../../data/user-data";

export class UserModel {
  private db: Map<string, User> = new Map();

  async create(user: User): Promise<User> {
    userSchema.parse(user);
    const id = uuidv7();
    const newUser = { ...user, id };
    this.db.set(newUser.id, newUser);
    return newUser;
  }

  async findById(id: string): Promise<User> {
    const user = this.db.get(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.db.values().find((user) => user.email === email);
    if (!user) {
      return null;
    }
    return user;
  }

  async update(payload: User): Promise<User> {
    const user = await this.findByEmail(payload.email);
    if (!user || !user.id) {
      throw new Error('User not found');
    }
    this.db.set(user.id, { ...user, ...payload });
    return await this.findById(user.id);
  }
}