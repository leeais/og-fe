import type { Instructor } from "./columns";

// mockdata.ts
export const data: Instructor[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  first_name: `First${i + 1}`,
  last_name: `Last${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `012345678${i}`,
}));
