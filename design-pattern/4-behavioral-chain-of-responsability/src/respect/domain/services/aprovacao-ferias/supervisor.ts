import { ApprovalHandler } from "./approval.abstract";
import { VacationRequest } from "./request";

export class SupervisorApproval extends ApprovalHandler {
  approve(request: VacationRequest): string {
    if (request.days > 5) {
      return "Aprovado pelo Supervisor";
    }
    return this.next!.approve(request);
  }
}
