import { InvoicesService } from "../../../module/invoices/handler"

export class InvoicesController {
    private invoicesService: InvoicesService

    constructor() {
        this.invoicesService = new InvoicesService();
    }

    public test = async () => {
        return await this.invoicesService.listEntries();
    }

}

export const useController = () => {
    return new InvoicesController()
}
