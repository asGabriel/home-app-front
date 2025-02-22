import { HttpHandler } from "../../../core/HttpHandler";
import { Entry } from "./types";

export class EntriesService extends HttpHandler {
  private readonly entriesEndpoint = "/finance/entries"

  constructor() {
    super("https://finance-api.ngrok.app");
  }

  public fetchEntriesByInvoiceId = async (invoiceId: string): Promise<Entry[]> => {
    return await this.get<Entry[]>(`${this.entriesEndpoint}/invoice/${invoiceId}`);
  };
}
