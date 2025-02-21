import { HttpHandler } from "../../core/HttpHandler";

export class InvoicesService extends HttpHandler {
  private readonly invoicesEndpoint = "/finance/invoices"

  constructor() {
    super("https://finance-api.ngrok.app");
  }

  public listEntries = async () => {
    return await this.get(this.invoicesEndpoint);
  };
}
