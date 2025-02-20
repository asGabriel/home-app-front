import { HttpHandler } from "../../core/HttpHandler";

export class InvoicesService extends HttpHandler {
  constructor() {
    super("http://localhost:8080/finance");
  }

  public listEntries = async () => {
    return await this.get("/entries");
  };
}
