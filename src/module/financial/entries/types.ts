export interface Entry {
    entryId: string,
    invoiceId: string,
    entryType: EntryType,
    description: string,
    value: number,
    dueDate: string,
    accountId: string,
    status: EntryStatus
}

export interface CreateEntryPayload {
    invoiceId: string,
    accountId: string,
    entryType: EntryType
    description: string,
    value: number,
    dueDate: string,
    tag: string[]
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