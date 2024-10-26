import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpHandler {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private handleRequest<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
    return request.then(response => response.data);
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest(this.client.get<T>(url, config));
  }

  public post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest(this.client.post<T>(url, data, config));
  }

  public put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest(this.client.put<T>(url, data, config));
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.handleRequest(this.client.delete<T>(url, config));
  }

  public setAuthorization(token: string) {
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
