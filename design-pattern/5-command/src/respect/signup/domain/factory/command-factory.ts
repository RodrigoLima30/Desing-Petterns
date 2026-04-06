import { AdminFeaturesSignupCommand } from "../command/admin-feature-signup-command";
import type { FeaturesSignupCommand } from "../../data/command-data";
import { GuestFeaturesSignupCommand } from "../command/guest-feature-signup-command";
import type { Profile } from "../../data/profile-data";
import type { User } from "../../data/user-data";
import { UserFeaturesSignupCommand } from "../command/user-feature-signup-command";

export class CommandFactory {
  makeFeaturesSignup(profile: Profile, user: User): FeaturesSignupCommand {
    switch (profile) {
      case 'admin':
        return new AdminFeaturesSignupCommand(user);
      case 'user':
        return new UserFeaturesSignupCommand(user);
      case 'guest':
        return new GuestFeaturesSignupCommand(user);
      default:
        return new GuestFeaturesSignupCommand(user);
    }
  }
}