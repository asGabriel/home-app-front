import { ColumnsType } from "antd/es/table";
import { HmPage } from "../../../components/HmPage"
import { Entry } from "../../../module/financial/entries/types";
import { Button, Space } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { HmTable } from "../../../components/HmTable/HmTable";
import { useFinancialController } from "../controller";

export const InvoicesDetailsPage = () => {
    const controller = useFinancialController();

    const columns: ColumnsType<Entry> = [
        {
            title: 'Ação',
            key: 'action',
            width: 100,
            render: (_, record) => (
                <Space>
                    <Button type="link" onClick={() => controller.editEntryById(record.entryId)}>
                        <EditFilled className='icon' />
                    </Button>
                    <Button type="link" danger onClick={() => controller.deleteEntryById(record.entryId)}>
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
        <HmPage>
            <h1>invoices details</h1>
            <HmTable columns={columns} dataSource={[]} />
        </HmPage>
    )
}