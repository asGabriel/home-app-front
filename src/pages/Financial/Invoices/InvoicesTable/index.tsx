import { ColumnsType } from "antd/es/table";
import { HmTable } from "../../../../components/HmTable/HmTable";
import { Invoice } from "../../../../module/financial/invoices/types";

const columns: ColumnsType<Invoice> = [
    {
        title: 'ID',
        dataIndex: 'invoiceId',
        key: 'invoiceId',
    },
    {
        title: 'Descrição',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Mês referência',
        dataIndex: 'month',
        key: 'month',
    },
    {
        title: 'Ano referência',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Criada em',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
];

export interface InvoicesTableProps {
    dataSource: Invoice[]
}

export const InvoicesTable = ({ dataSource }: InvoicesTableProps) => {
    return (
        <HmTable columns={columns} dataSource={dataSource} />
    )
}