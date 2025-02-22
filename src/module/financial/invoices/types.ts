export interface Invoice {
    invoiceId: string,
    title: string,
    month: number,
    year: number,
    isMain: boolean,
    createdAt: string
}