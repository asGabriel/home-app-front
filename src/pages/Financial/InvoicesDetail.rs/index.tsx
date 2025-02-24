import { ColumnsType } from "antd/es/table";
import { HmPage } from "../../../components/HmPage"
import { Entry } from "../../../module/financial/entries/types";
import { Button, Col, Divider, Form, Input, InputNumber, Modal, Radio, Row, Select, Space } from "antd";
import { EditFilled, DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { HmTable } from "../../../components/HmTable/HmTable";
import { useFinancialController } from "../controller";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RegisterEntryFieldType, tableColumns } from "./types";
import { RegisterEntryForm } from "./RegisterEntryForm/RegisterEntryForm";
import { ModalContext } from "../../../contexts/ModalContext";

export const InvoicesDetailsPage = () => {
    const controller = useFinancialController();
    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false)

    const [entries, setEntries] = useState<Entry[]>([]);
    const [form] = Form.useForm();

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

    const onFinishForm = (data: RegisterEntryFieldType) => {
        setIsModalOpen(true);
        console.log("clicou no finish")
    };

    const openModal = () => {
        console.log("open modal")
        setIsModalOpen(false)
    }

    const closeModal = () => {
        console.log("close modal")
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
                        onClick={() => setIsFormOpen(true)}
                    />
                </Col>
                <Modal
                    title="Registrar nova entrada"
                    open={isFormOpen}
                    onCancel={() => {
                        setIsModalOpen(false);
                        console.log("reset field")
                        form.resetFields();
                        console.log("resetou")
                    }}
                    footer={null}
                >
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishForm}
                        onFinishFailed={() => console.log("falha ao enviar")}
                        autoComplete="off"
                    >
                        <Form.Item<RegisterEntryFieldType>
                            name='type'
                            rules={[{ required: true, message: "*campo obrigatório" }]}
                        >
                            <Radio.Group>
                                <Radio value="REVENUE"> Receita </Radio>
                                <Radio value="EXPENSE"> Despesa </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item<RegisterEntryFieldType>
                            label="Conta"
                            name='accountId'
                            rules={[{ required: true, message: "*campo obrigatório" }]}
                        >
                            <Select>
                                <Select.Option value='39c9765b-10d8-477d-b8aa-8219f953a6dc'>NUBANK</Select.Option>
                                <Select.Option value='INTER'>INTER</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item<RegisterEntryFieldType>
                            label="Valor (R$)"
                            name="value"
                            rules={[{ required: true, message: "*campo obrigatório" }]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>

                        <Form.Item<RegisterEntryFieldType>
                            label="Descrição"
                            name="description"
                            rules={[{ required: true, message: "*campo obrigatório" }]}
                        >
                            <Input maxLength={30} />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
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