import { ApprovalHandler } from "./approval.abstract";
import { VacationRequest } from "./request";

export class ManagerApproval extends ApprovalHandler {
  approve(request: VacationRequest): string {
    if (request.days > 10 && request.role === "EMPLOYEE") {
      return "Aprovado pelo Manager";
    }
    return this.next!.approve(request);
  }
}
