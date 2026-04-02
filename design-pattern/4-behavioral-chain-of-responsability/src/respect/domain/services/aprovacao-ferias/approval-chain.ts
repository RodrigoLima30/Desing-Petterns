import { CEOApproval } from "./ceo";
import { SupervisorApproval } from "./supervisor";
import { AutoApproval } from "./auto";
import { VacationRequest } from "./request";
import { HRApproval } from "./rh";
import { ManagerApproval } from "./menager";

export class ApprovalChain {
  execute(request: VacationRequest): string {
    const ceo = new CEOApproval();
    const rh = new HRApproval();
    const manager = new ManagerApproval();
    const supervisor = new SupervisorApproval();
    const auto = new AutoApproval();

    ceo.setNext(rh);
    rh.setNext(manager);
    manager.setNext(supervisor);
    supervisor.setNext(auto);

    return ceo.approve(request);
  }
}
