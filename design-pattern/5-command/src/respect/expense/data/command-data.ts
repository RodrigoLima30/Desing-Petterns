import type { User } from "../domain/entity/user-entity";
import type { UserProps } from "./user-data";

export interface FeatureExpenseCommand {
     toJSON(): Readonly<UserProps>;
}