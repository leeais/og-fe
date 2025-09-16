import type { FacultyFormValues } from "@/pages/CategoriesFaculties/components/ModalFaculty/utils";
import api from "./api.service";

class FacultyService {
  getFaculties() {
    return api.get("/faculties");
  }
  getFaculty(id: string) {
    return api.get(`/faculties/${id}`);
  }
  createFaculty(data: FacultyFormValues) {
    return api.post("/faculties", data);
  }
  updateFaculty(id: string, data: Partial<FacultyFormValues>) {
    return api.put(`/faculties/${id}`, data);
  }
  deleteFaculty(id: string) {
    return api.delete(`/faculties/${id}`);
  }
}

export const facultyService = new FacultyService();
