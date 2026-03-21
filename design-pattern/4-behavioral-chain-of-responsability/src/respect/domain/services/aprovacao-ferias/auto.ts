import { ApprovalHandler } from "./approval.abstract";

export class AutoApproval extends ApprovalHandler {
  approve(): string {
    return "Aprovado automaticamente";
  }
}
