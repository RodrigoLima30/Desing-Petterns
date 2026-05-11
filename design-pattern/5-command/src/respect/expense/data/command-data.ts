import type { User } from "../domain/entity/user-entity";

export interface FeatureExpenseCommand {
     toJSON(): User;
}