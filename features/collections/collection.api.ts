import { invokeCommand } from "@/lib/tauri";
import type {
  Collection,
  CollectionListResponse,
  CreateCollectionPayload,
  UpdateCollectionPayload,
} from "./collection.types";

export const collectionApi = {
  async getCollections(): Promise<CollectionListResponse> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_collections");
    return { collections: [], total: 0 };
  },

  async getCollection(id: string): Promise<Collection | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("get_collection", { id });
    return null;
  },

  async createCollection(
    payload: CreateCollectionPayload
  ): Promise<Collection | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("create_collection", payload);
    return null;
  },

  async updateCollection(
    id: string,
    payload: UpdateCollectionPayload
  ): Promise<Collection | null> {
    // Placeholder: Replace with actual API call
    await invokeCommand("update_collection", { id, ...payload });
    return null;
  },

  async deleteCollection(id: string): Promise<boolean> {
    // Placeholder: Replace with actual API call
    await invokeCommand("delete_collection", { id });
    return true;
  },
};
