export interface Invoice {
  invoiceId: string;
  title: string;
  month: number;
  year: number;
  createdAt: string;
  updateAt?: string;
  deletedAt?: string;
}
