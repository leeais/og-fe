import api from "./api.service";
import type { AccountFormData } from "@/pages/GeneralAccounts/components/ModalAccount/utils";

class AccountService {
  getAccounts() {
    return api.get("/accounts");
  }
  getAccountById(id: string) {
    return api.get(`/accounts/${id}`);
  }
  createAccount(data: AccountFormData) {
    return api.post("/accounts", data);
  }
  updateAccount(id: string, data: Partial<AccountFormData>) {
    return api.put(`/accounts/${id}`, data);
  }
  deleteAccount(id: string) {
    return api.delete(`/accounts/${id}`);
  }
}

export const accountService = new AccountService();
