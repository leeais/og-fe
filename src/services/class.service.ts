import type { ClassFormData } from "@/pages/CategoriesClasses/components/ModalClass/utils";
import api from "./api.service";

class ClassService {
  getClasses() {
    return api.get("/classes");
  }
  getClass(id: number) {
    return api.get(`/classes/${id}`);
  }
  createClass(data: ClassFormData) {
    return api.post("/classes", data);
  }
  updateClass(id: number, data: Partial<ClassFormData>) {
    return api.put(`/classes/${id}`, data);
  }
  deleteClass(id: number) {
    return api.delete(`/classes/${id}`);
  }
}

export const classService = new ClassService();
