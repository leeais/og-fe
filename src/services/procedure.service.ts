import type { ProcedureFormData } from "@/pages/CategoriesProcedures/components/ModalProcedures/utils";
import api from "./api.service";

class ProcedureService {
  getProcedures() {
    return api.get("/request-types");
  }
  getProcedureById(id: string) {
    return api.get(`/request-types/${id}`);
  }
  createProcedure(data: ProcedureFormData) {
    return api.post("/request-types", data);
  }
  updateProcedure(id: string, data: Partial<ProcedureFormData>) {
    return api.put(`/request-types/${id}`, data);
  }
  deleteProcedure(id: string) {
    return api.delete(`/request-types/${id}`);
  }
}

export const procedureService = new ProcedureService();
