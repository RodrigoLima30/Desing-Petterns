import { VacationRequest } from "./request";

export abstract class ApprovalHandler {
  protected next?: ApprovalHandler;

  setNext(next: ApprovalHandler): ApprovalHandler {
    this.next = next;
    return next;
  }

  abstract approve(request: VacationRequest): string;
}
