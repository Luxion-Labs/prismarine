export interface Environment {
  id: string;
  name: string;
  description?: string;
  variables: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnvironmentListResponse {
  environments: Environment[];
  total: number;
}

export interface CreateEnvironmentPayload {
  name: string;
  description?: string;
  variables?: Record<string, string>;
}

export interface UpdateEnvironmentPayload {
  name?: string;
  description?: string;
  variables?: Record<string, string>;
}
