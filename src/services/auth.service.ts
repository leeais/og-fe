import type { LoginFormData } from "@/pages/Login/utils";
import api from "./api.service";

class AuthService {
  login(data: LoginFormData) {
    return api.post("/auth/login", data);
  }
}

export const authService = new AuthService();
