import api from "./api.service";
import type { InstructorFormValues } from "@/pages/GeneralInstructors/components/ModalInstructor/utils";

class InstructorService {
  getInstructors() {
    return api.get("/class-instructors");
  }
  getInstructorById(id: string) {
    return api.get(`/class-instructors/${id}`);
  }
  createInstructor(data: InstructorFormValues) {
    return api.post("/class-instructors", data);
  }
  updateInstructor(id: string, data: Partial<InstructorFormValues>) {
    return api.put(`/class-instructors/${id}`, data);
  }
  deleteInstructor(id: string) {
    return api.delete(`/class-instructors/${id}`);
  }
}

export const instructorService = new InstructorService();
