import { create } from "zustand";
import type { Environment } from "./env.types";

interface EnvironmentState {
  environments: Environment[];
  activeEnvironment: Environment | null;
  loading: boolean;
  error: string | null;
  setEnvironments: (environments: Environment[]) => void;
  addEnvironment: (environment: Environment) => void;
  updateEnvironment: (id: string, environment: Partial<Environment>) => void;
  removeEnvironment: (id: string) => void;
  setActiveEnvironment: (environment: Environment | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useEnvironmentStore = create<EnvironmentState>((set) => ({
  environments: [],
  activeEnvironment: null,
  loading: false,
  error: null,

  setEnvironments: (environments) => set({ environments }),
  addEnvironment: (environment) =>
    set((state) => ({ environments: [...state.environments, environment] })),
  updateEnvironment: (id, updates) =>
    set((state) => ({
      environments: state.environments.map((e) =>
        e.id === id ? { ...e, ...updates } : e
      ),
      activeEnvironment:
        state.activeEnvironment?.id === id
          ? { ...state.activeEnvironment, ...updates }
          : state.activeEnvironment,
    })),
  removeEnvironment: (id) =>
    set((state) => ({
      environments: state.environments.filter((e) => e.id !== id),
      activeEnvironment:
        state.activeEnvironment?.id === id ? null : state.activeEnvironment,
    })),
  setActiveEnvironment: (environment) => set({ activeEnvironment: environment }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
