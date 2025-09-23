import api from "./api.service";

class RequestsService {
  getRequests() {
    return api.get("/requests");
  }
  getRequestsByUser(userId: string) {
    return api.get(`/users/${userId}/requests`);
  }
  getRequest(id: string) {
    return api.get(`/requests/${id}`);
  }
  createRequest(data: { test: string }) {
    return api.post("/requests", data);
  }
  updateRequest(id: string, data: Partial<{ test: string }>) {
    return api.put(`/requests/${id}`, data);
  }
  deleteRequest(id: string) {
    return api.delete(`/requests/${id}`);
  }
}

export const requestService = new RequestsService();
