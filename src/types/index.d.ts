export interface Response<T> {
  data?: T;
  message: string;
}

export interface HttpError {
  message: string;
}

export type tParams = Promise<{ id: string[] }>;
