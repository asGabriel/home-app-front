import { AccountService } from "../../module/financial/accounts/handler";
import { Account } from "../../module/financial/accounts/types";
import { EntriesService } from "../../module/financial/entries/handler";
import { CreateEntryPayload, Entry } from "../../module/financial/entries/types";
import { InvoicesService } from "../../module/financial/invoices/handler"
import { Invoice } from "../../module/financial/invoices/types";

export class FinancialController {
    private invoicesService: InvoicesService
    private entriesService: EntriesService
    private accountService: AccountService

    constructor() {
        this.invoicesService = new InvoicesService();
        this.entriesService = new EntriesService();
        this.accountService = new AccountService();
    }

    public fetchInvoices = async (): Promise<Invoice[]> => {
        return await this.invoicesService.fetchInvoices();
    }

    public fetchEntriesByInvoiceId = async (invoiceId: string): Promise<Entry[]> => {
        return await this.entriesService.fetchEntriesByInvoiceId(invoiceId)
    }

    public fetchAccounts = async (): Promise<Account[]> => {
        return await this.accountService.fetchAccounts()
    }

    public editInvoiceById = async (invoiceId: string): Promise<void> => {
        console.log(`TODO: editar invoice ${invoiceId}`)
    }

    public deleteInvoiceById = async (invoiceId: string): Promise<void> => {
        console.log(`TODO: editar invoice ${invoiceId}`)
    }

    public editEntryById = async (entryId: string): Promise<void> => {
        console.log(`TODO: editar entry ${entryId}`)
    }

    public deleteEntryById = async (entryId: string): Promise<void> => {
        console.log(`TODO: editar entry ${entryId}`)
    }

    public createEntry = async (payload: CreateEntryPayload): Promise<Entry> => {
        console.log("criar entry", payload)
        return await this.entriesService.createEntry(payload);
    }
}

export const useFinancialController = () => {
    return new FinancialController()
}
