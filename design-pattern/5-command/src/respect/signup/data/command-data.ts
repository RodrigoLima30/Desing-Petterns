import type { User } from "./user-data";

export interface FeaturesSignupCommand {
  toJSON(): User
}