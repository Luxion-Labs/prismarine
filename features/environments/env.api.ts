import { invokeCommand } from "@/lib/tauri";
import type {
  Environment,
  EnvironmentListResponse,
  CreateEnvironmentPayload,
  UpdateEnvironmentPayload,
} from "./env.types";

export const environmentApi = {
  async getEnvironments(): Promise<EnvironmentListResponse> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_environments");
    return { environments: [], total: 0 };
  },

  async getEnvironment(id: string): Promise<Environment | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_environment", { id });
    return null;
  },

  async createEnvironment(
    payload: CreateEnvironmentPayload
  ): Promise<Environment | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("create_environment", payload);
    return null;
  },

  async updateEnvironment(
    id: string,
    payload: UpdateEnvironmentPayload
  ): Promise<Environment | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("update_environment", { id, ...payload });
    return null;
  },

  async deleteEnvironment(id: string): Promise<boolean> {
    // Placeholder: Replace with actual API call
    await invokeCommand("delete_environment", { id });
    return true;
  },
};
