export class HttpHandler {
  private readonly url: string;

  constructor(url = "") {
    this.url = url;
  }

  protected async request<T>(
    endpoint: string,
    method: HttpMethod,
    data?: any,
    headers?: HeadersInit
  ): Promise<T> {
    const url = `${this.url}${endpoint}`;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Request error:", error);
      throw error;
    }
  }

  public get<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, HttpMethod.GET, undefined, headers);
  }
}

enum HttpMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
