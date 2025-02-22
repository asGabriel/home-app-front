import './styles.scss'
import { ColumnsType } from "antd/es/table";
import { HmTable } from "../../../../components/HmTable/HmTable";
import { Invoice } from "../../../../module/financial/invoices/types";
import { Button, Space } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

export interface InvoicesTableProps {
    dataSource: Invoice[],
    onEdit: (invoiceId: string) => void;
    onDelete: (invoiceId: string) => void;
}

export const InvoicesTable = ({ dataSource, onEdit, onDelete }: InvoicesTableProps) => {

    const columns: ColumnsType<Invoice> = [
        {
            title: 'Ação',
            key: 'action',
            width: 100,
            render: (_, record) => (
                <Space>
                    <Button type="link" onClick={() => onEdit(record.invoiceId)}>
                        <EditFilled className='icon' />
                    </Button>
                    <Button type="link" danger onClick={() => onDelete(record.invoiceId)}>
                        <DeleteFilled className='icon' />
                    </Button>
                </Space>
            ),
        },
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

    return (
        <HmTable columns={columns} dataSource={dataSource} />
    )
}