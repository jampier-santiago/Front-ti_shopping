export interface HttpAdapter {
  get<T>(url: string, headers?: any): Promise<T>;
  post<T>(url: string, data: any, headers?: any): Promise<T>;
  put<T>(url: string, data: any, headers?: any): Promise<T>;
  deleteEndpoint<T>(url: string, headers?: any): Promise<T>;
}
