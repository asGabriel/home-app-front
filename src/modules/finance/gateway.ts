import { HttpHandler } from "../utils/http-handler";

export class FinanceGateway extends HttpHandler {
  constructor() {
    super("https://api.exemplo.com/finance");
  }

  public listInvoices() {
    const res = [
      {
        invoiceId: "20d8dc9d-85d5-4a50-8154-f57414466d0c",
        title: "Fatura de September / 2024",
        month: 9,
        year: 2024,
        createdAt: "2024-09-16T21:14:36.932488Z",
      },
      {
        invoiceId: "265d3324-93eb-489c-a373-522a1d70facc",
        title: "Fatura de October / 2024",
        month: 10,
        year: 2024,
        createdAt: "2024-10-24T10:58:06.915483Z",
      },
    ];

    return res;
  }
}
