import { ApprovalHandler } from "./approval.abstract";
import { VacationRequest } from "./request";

export class HRApproval extends ApprovalHandler {
  approve(request: VacationRequest): string {
    if (
      (request.days > 20 && request.role === "EMPLOYEE") ||
      (request.days > 10 && request.role === "INTERN")
    ) {
      return "Aprovado pelo RH";
    }
    return this.next!.approve(request);
  }
}
