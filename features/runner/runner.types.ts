export enum RunStatus {
  Idle = "idle",
  Running = "running",
  Success = "success",
  Failed = "failed",
  Cancelled = "cancelled",
}

export interface RunExecution {
  id: string;
  collectionId: string;
  status: RunStatus;
  startedAt?: Date;
  completedAt?: Date;
  results?: Record<string, any>;
}

export interface RunCommand {
  id: string;
  name: string;
  method: string;
  url: string;
}

export interface RunListResponse {
  runs: RunExecution[];
  total: number;
}

export interface StartRunPayload {
  collectionId: string;
  commandIds?: string[];
}
