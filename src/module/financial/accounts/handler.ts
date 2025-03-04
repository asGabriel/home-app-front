import { HttpHandler } from "../../../core/HttpHandler";
import { Account } from "./types";

export class AccountService extends HttpHandler {
  private readonly entriesEndpoint = "/finance/accounts"

  constructor() {
    super("https://finance-api.ngrok.app");
  }

  public fetchAccounts = async (): Promise<Account[]> => {
    return await this.get<Account[]>(`${this.entriesEndpoint}`);
  };
}
