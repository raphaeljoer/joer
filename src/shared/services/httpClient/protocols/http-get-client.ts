export interface HttpGetClient {
  get<T>(url: string, options?: unknown): Promise<T>;
}
