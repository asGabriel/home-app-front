import { ColumnsType } from "antd/es/table";
import { Entry, EntryType } from "../../../module/financial/entries/types";

export type RegisterEntryFieldType = {
    type: EntryType
    description: string;
    value: number;
    accountId: string;
};

export const tableColumns: ColumnsType<Entry> = [
    {
        title: 'ID',
        dataIndex: 'entryId',
        key: 'invoiceId',
        hidden: true
    },
    {
        title: 'Invoice ID',
        dataIndex: 'invoiceId',
        key: 'invoiceId',
        hidden: true
    },
    {
        title: 'Tipo de movimento',
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
        dataIndex: 'status',
        key: 'status',
    }
]
