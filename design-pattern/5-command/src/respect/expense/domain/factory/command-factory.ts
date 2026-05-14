import type { FeatureExpenseCommand } from "../../data/command-data";
import { DirectorFeatureExpenseCommand } from "../command/director-feature-expense-command";
import { EmployeeFeatureExpenseCommand } from "../command/employee-feature-expense-command";
import { ManagerFeatureExpenseCommand } from "../command/manager-feature-expense-command";
import type { User } from "../entity/user-entity";

export class CommandFactory {
    makeFeatureExpense(profile: string, user: User): FeatureExpenseCommand {
        switch (profile) {
            case 'director':
                return new DirectorFeatureExpenseCommand(user);
            case 'manager':
                return new ManagerFeatureExpenseCommand(user);
            case 'employee':
                return new EmployeeFeatureExpenseCommand(user);
            default:
                return new EmployeeFeatureExpenseCommand(user);
        }
    }
}