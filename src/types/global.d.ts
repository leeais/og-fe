export {};

declare global {
  type Id = string | number;

  type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data?:
      | {
          page: number;
          limit: number;
          totalPages: number;
          list: T[];
        }
      | T;
  };
}
