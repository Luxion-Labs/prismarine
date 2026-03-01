import { invokeCommand } from "@/lib/tauri";
import type {
  RunExecution,
  RunListResponse,
  StartRunPayload,
} from "./runner.types";

export const runnerApi = {
  async getRuns(): Promise<RunListResponse> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_runs");
    return { runs: [], total: 0 };
  },

  async getRun(id: string): Promise<RunExecution | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_run", { id });
    return null;
  },

  async startRun(payload: StartRunPayload): Promise<RunExecution | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("start_run", payload);
    return null;
  },

  async cancelRun(id: string): Promise<boolean> {
    // Placeholder: Replace with actual API call
    await invokeCommand("cancel_run", { id });
    return true;
  },

  async deleteRun(id: string): Promise<boolean> {
    // Placeholder: Replace with actual API call
    await invokeCommand("delete_run", { id });
    return true;
  },
};
