export interface ICommonResponse<T> {
  code: number;
  message: string;
  result?: T;
}

export const CommonResponse = {
  //공통
  SUCCESS: { code: 1, message: "Success" },
  FAILED: { code: 2, message: "Failed By Server Error" },
  PARAMETER_INVALID: { code: 3, message: "Invalid Parameter" },
  UNAUTHORIZED: { code: 4, message: "Unathorized" },

  // Academy
  // Build
  // Built
  // Class
  // Commission
  // Cowork
  // Fee
  // Location
  // Member
  // partners
};

export interface IPage<T> {
  data: T[];
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage?: number;
  prevPage?: number;
}

export const pageof = <T>(
  data: T[],
  page: number,
  size: number,
  totalCount: number
): IPage<T> => {
  const totalPages = Math.ceil(totalCount / size);
  const hasNextPage = page < totalCount - 1;
  const hasPrevPage = page > 0;
  const nextPage = hasNextPage ? page + 1 : undefined;
  const prevPage = hasPrevPage ? page - 1 : undefined;
  return {
    data,
    page,
    size,
    totalCount,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
  };
};
