import type { ProceduresFormValues } from "@/pages/CategoriesProcedures/components/ModalProcedues/utils";
import api from "./api.services";

class ProceduresService {
  getProcedures() {
    return api.get("/request-types");
  }
  getProcedureById(id: string) {
    return api.get(`/procedures/${id}`);
  }
  createProcedure(data: ProceduresFormValues) {
    return api.post("/procedures", data);
  }
  updateProcedure(id: string, data: Partial<ProceduresFormValues>) {
    return api.put(`/procedures/${id}`, data);
  }
  deleteProcedure(id: string) {
    return api.delete(`/procedures/${id}`);
  }
}

export const proceduresService = new ProceduresService();
