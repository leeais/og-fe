import type { LoginFormValues } from "@/pages/Login/utils";
import api from "./api.service";

class AuthService {
    login(data: LoginFormValues) {
        return api.post('/auth/login', data);
    }
}

export const authService =  new AuthService();