import { ColumnsType } from "antd/es/table";
import { Entry } from "../../../../module/invoices/types";
import { HmTable } from "../../../../components/HmTable/HmTable";

const columns: ColumnsType<Entry> = [
    {
        title: 'ID',
        dataIndex: 'entryId',
        key: 'entryId',
    },
    {
        title: 'ID Fatura',
        dataIndex: 'invoiceId',
        key: 'invoiceId',
    },
    {
        title: 'Natureza',
        dataIndex: 'entryType',
        key: 'entryType',
    },
    {
        title: 'Descrição',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Valor (R$)',
        dataIndex: 'value',
        key: 'value',
    },
    {
        title: 'Vencimento',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Status',
        dataIndex: 'entryType',
        key: 'entryType',
    },
];

export const InvoicesTable = () => {
    return(
        <HmTable columns={columns} />
    )
}