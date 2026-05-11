import type { User } from "../domain/entity/user-entity";

export interface FeaturesSignupCommand {
  toJSON(): User;
}