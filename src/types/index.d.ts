export interface Response<T = any> {
  data?: T;
  message: string;
  pagination: Pagination;
}

export interface PaginationTypes {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface HttpError {
  message: string;
}

export type tParams = Promise<{ param: string }>; // => basic;
