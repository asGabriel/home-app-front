import { ColumnsType } from "antd/es/table";
import { HmPage } from "../../../components/HmPage"
import { Entry } from "../../../module/financial/entries/types";
import { Button, Col, Divider, Row, Space } from "antd";
import { EditFilled, DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { HmTable } from "../../../components/HmTable/HmTable";
import { useFinancialController } from "../controller";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tableColumns } from "./types";
import { RegisterEntryForm } from "./RegisterEntryForm/RegisterEntryForm";
import { ModalContext } from "../../../contexts/ModalContext";

export const InvoicesDetailsPage = () => {
    const controller = useFinancialController();
    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);

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
        ...tableColumns
    ];

    const openModal = () => {
        setIsModalOpen(false)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    // TODO: adicionar o cabeçalho da fatura
    return (
        <HmPage>
            <Row justify={'space-between'} align={'middle'}>
                <Col>
                    <h1>invoices details</h1>
                </Col>
                <Col>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusCircleOutlined />}
                        size={'large'}
                        onClick={() => setIsModalOpen(true)}
                    />
                </Col>
                
            </Row>
            <ModalContext.Provider value={{ isModalOpen, closeModal, openModal }}>
                <RegisterEntryForm isOpen={isModalOpen} onClose={closeModal} onOk={openModal}/>
            </ModalContext.Provider>
            <Divider variant="dashed" style={{ borderColor: '#000000' }} dashed>
                <h3>Entradas</h3>
            </Divider>
            <HmTable columns={columns} dataSource={entries} />
        </HmPage>
    )
}