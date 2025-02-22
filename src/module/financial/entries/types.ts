export interface Entry {
    entryId: string,
    invoiceId: string,
    entryType: EntryType,
    description: string,
    value: number,
    dueDate: Date,
    accountId: string,
    status: EntryStatus
}

export enum EntryType {
    Revenue = "Receita",
    Expense = "Despesa"
}

export enum EntryStatus {
    Pending = "Pendente",
    Canceled = "Cancelado",
    Completed = "Completado"
}