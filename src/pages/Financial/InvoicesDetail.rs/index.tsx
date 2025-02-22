import { ColumnsType } from "antd/es/table";
import { HmPage } from "../../../components/HmPage"
import { Entry } from "../../../module/financial/entries/types";
import { Button, Space } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { HmTable } from "../../../components/HmTable/HmTable";
import { useFinancialController } from "../controller";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const InvoicesDetailsPage = () => {
    const controller = useFinancialController();
    const { id } = useParams();

    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        const fetchData = async (invoiceId: string) => {
            const entries = await controller.fetchEntriesByInvoiceId(invoiceId);
            setEntries(entries);
        };

        if (id) {
            fetchData(id);
        }
    }, [id]);

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
        },
    ];

    return (
        <HmPage>
            <h1>invoices details</h1>
            <HmTable columns={columns} dataSource={entries} />
        </HmPage>
    )
}