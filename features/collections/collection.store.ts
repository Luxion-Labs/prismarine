import { create } from "zustand";
import type { Collection } from "./collection.types";

interface CollectionState {
  collections: Collection[];
  loading: boolean;
  error: string | null;
  setCollections: (collections: Collection[]) => void;
  addCollection: (collection: Collection) => void;
  removeCollection: (id: string) => void;
  updateCollection: (id: string, collection: Partial<Collection>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCollectionStore = create<CollectionState>((set) => ({
  collections: [],
  loading: false,
  error: null,

  setCollections: (collections) => set({ collections }),
  addCollection: (collection) =>
    set((state) => ({ collections: [...state.collections, collection] })),
  removeCollection: (id) =>
    set((state) => ({
      collections: state.collections.filter((c) => c.id !== id),
    })),
  updateCollection: (id, updates) =>
    set((state) => ({
      collections: state.collections.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
