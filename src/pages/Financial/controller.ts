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

    public editInvoiceById = async (invoiceId: string): Promise<void> => {
        console.log(`TODO: editar invoice ${invoiceId}`)
    }

    public deleteInvoiceById = async (invoiceId: string): Promise<void> => {
        console.log(`TODO: editar invoice ${invoiceId}`)
    }

    public editEntryById = async (entryId:string): Promise<void> => {
        console.log(`TODO: editar entry ${entryId}`)
    }

    public deleteEntryById = async (entryId: string): Promise<void> => {
        console.log(`TODO: editar entry ${entryId}`)
    }
}

export const useFinancialController = () => {
    return new FinancialController()
}
