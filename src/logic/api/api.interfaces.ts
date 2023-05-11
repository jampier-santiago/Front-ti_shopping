export interface Props {
  url: string;
  data?: any;
  headers?: any;
}

export interface HttpAdapter {
  get<T>({ url, headers }: Props): Promise<T>;
  post<T>({ url, data, headers }: Props): Promise<T>;
  put<T>({ url, data, headers }: Props): Promise<T>;
  deleteEndpoint<T>({ url, headers }: Props): Promise<T>;
}
