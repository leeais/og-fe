import type { BatchFormData } from "@/pages/CategoriesBatches/components/ModalBatch/utils";
import api from "./api.service";

export type BatchPayload = Pick<BatchFormData, "name" | "shortName"> & {
  startYear: number;
  endYear: number;
};

class BatchService {
  getBatches() {
    return api.get("/batches");
  }
  getBatch(id: number) {
    return api.get(`/batches/${id}`);
  }
  createBatch(data: BatchPayload) {
    return api.post("/batches", data);
  }
  updateBatch(id: number, data: Partial<BatchPayload>) {
    return api.put(`/batches/${id}`, data);
  }
  deleteBatch(id: number) {
    return api.delete(`/batches/${id}`);
  }
}

export const batchService = new BatchService();
