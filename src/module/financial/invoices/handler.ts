import { HttpHandler } from "../../../core/HttpHandler";
import { Invoice } from "./types";

export class InvoicesService extends HttpHandler {
  private readonly invoicesEndpoint = "/finance/invoices"

  constructor() {
    super("https://finance-api.ngrok.app");
  }

  public fetchInvoices = async (): Promise<Invoice[]> => {
    return await this.get<Invoice[]>(this.invoicesEndpoint);
  };
}
