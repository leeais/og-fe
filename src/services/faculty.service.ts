import type { FacultyFormValues } from "@/pages/CategoriesFaculties/components/ModalFaculty/utils";
import api from "./api.service";

class FacultyService {
  getFaculties() {
    return api.get("/faculties");
  }
  getFaculty(id: number) {
    return api.get(`/faculties/${id}`);
  }
  createFaculty(data: FacultyFormValues) {
    return api.post("/faculties", data);
  }
  updateFaculty(id: number, data: Partial<FacultyFormValues>) {
    return api.put(`/faculties/${id}`, data);
  }
  deleteFaculty(id: number) {
    return api.delete(`/faculties/${id}`);
  }
}

export const facultyService = new FacultyService();
