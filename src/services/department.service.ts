import type { DepartmentFormData } from "@/pages/CategoriesDepartment/components/ModalDepartment/utils";
import api from "./api.service";

class DepartmentsService {
  getDepartments() {
    return api.get("/departments");
  }
  getDepartment(id: number) {
    return api.get(`/departments/${id}`);
  }
  createDepartment(data: DepartmentFormData) {
    return api.post("/departments", data);
  }
  updateDepartment(id: number, data: Partial<DepartmentFormData>) {
    return api.put(`/departments/${id}`, data);
  }
  deleteDepartment(id: number) {
    return api.delete(`/departments/${id}`);
  }
}

export const departmentService = new DepartmentsService();
