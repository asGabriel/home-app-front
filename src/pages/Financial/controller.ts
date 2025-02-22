import { InvoicesService } from "../../module/financial/invoices/handler"
import { Invoice } from "../../module/financial/invoices/types";

export class FinancialController {
    private invoicesService: InvoicesService

    constructor() {
        this.invoicesService = new InvoicesService();
    }

    public fetchInvoices = async (): Promise<Invoice[]> => {
        return await this.invoicesService.fetchInvoices();
    }
}

export const useController = () => {
    return new FinancialController()
}
