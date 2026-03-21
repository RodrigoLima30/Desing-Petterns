import { ApprovalHandler } from "./approval.abstract";
import { VacationRequest } from "./request";

export class CEOApproval extends ApprovalHandler {
  approve(request: VacationRequest): string {
    if (request.days > 20 && request.role === "MANAGER") {
      return "Aprovado pelo CEO";
    }
    return this.next!.approve(request);
  }
}
