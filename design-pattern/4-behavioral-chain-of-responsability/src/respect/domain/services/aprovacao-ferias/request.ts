export type Role = "EMPLOYEE" | "INTERN" | "MANAGER";

export class VacationRequest {
  constructor(
    public readonly days: number,
    public readonly role: Role
  ) {}
}
