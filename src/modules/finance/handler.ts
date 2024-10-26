import { FinanceGateway } from "./gateway";
import { Invoice } from "./types";

export class FinanceHandler {
  private financeGateway: FinanceGateway;
  public invoices: Invoice[] = [];

  constructor() {
    this.financeGateway = new FinanceGateway();
  }

  public async fetchInvoices(): Promise<Invoice[]> {
    const data = this.financeGateway.listInvoices();

    this.invoices = data;

    return this.invoices;
  }
}
