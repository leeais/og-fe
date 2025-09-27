import { useState, useCallback } from "react";

interface UsePaginationProps {
  defaultCurrent?: number;
  defaultPageSize?: number;
}

export function usePagination({
  defaultCurrent = 1,
  defaultPageSize = 10,
}: UsePaginationProps = {}) {
  const [pagination, setPagination] = useState({
    current: defaultCurrent,
    pageSize: defaultPageSize,
  });

  const handleChange = useCallback((page: number, pageSize: number) => {
    setPagination({ current: page, pageSize });
  }, []);

  const reset = useCallback(() => {
    setPagination({ current: 1, pageSize: defaultPageSize });
  }, [defaultPageSize]);

  return {
    pagination,
    onChange: handleChange,
    onShowSizeChange: handleChange,
    reset,
  };
}
