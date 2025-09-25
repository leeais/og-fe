import api from "./api.service";
import type { StudentFormData } from "@/pages/GeneralStudents/components/ModalStudent/utils";

class StudentService {
  getStudents() {
    return api.get("/class-students");
  }
  getStudentById(id: string) {
    return api.get(`/class-students/${id}`);
  }
  createStudent(data: StudentFormData) {
    return api.post("/class-students", data);
  }
  updateStudent(id: string, data: Partial<StudentFormData>) {
    return api.put(`/class-students/${id}`, data);
  }
  deleteStudent(id: string) {
    return api.delete(`/class-students/${id}`);
  }
}

export const studentService = new StudentService();
