import { create } from "zustand";
import type { RunExecution } from "./runner.types";

interface RunnerState {
  runs: RunExecution[];
  currentRun: RunExecution | null;
  loading: boolean;
  error: string | null;
  setRuns: (runs: RunExecution[]) => void;
  addRun: (run: RunExecution) => void;
  updateRun: (id: string, run: Partial<RunExecution>) => void;
  removeRun: (id: string) => void;
  setCurrentRun: (run: RunExecution | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useRunnerStore = create<RunnerState>((set) => ({
  runs: [],
  currentRun: null,
  loading: false,
  error: null,

  setRuns: (runs) => set({ runs }),
  addRun: (run) => set((state) => ({ runs: [...state.runs, run] })),
  updateRun: (id, updates) =>
    set((state) => ({
      runs: state.runs.map((r) => (r.id === id ? { ...r, ...updates } : r)),
      currentRun:
        state.currentRun?.id === id
          ? { ...state.currentRun, ...updates }
          : state.currentRun,
    })),
  removeRun: (id) =>
    set((state) => ({
      runs: state.runs.filter((r) => r.id !== id),
    })),
  setCurrentRun: (run) => set({ currentRun: run }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
