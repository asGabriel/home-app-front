import { Button, Form, Input, InputNumber, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { RegisterEntryFieldType } from "../types";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOk: () => void;
}

export const RegisterEntryForm = ({ isOpen, onClose, onOk }: ModalProps) => {
    const [form] = Form.useForm();
    const [confirmModal, setConfirmModal] = useState<boolean>(false);

    const handleCloseConfirmModal = () => {
        setConfirmModal(false);
    };

    const handleOpenConfirmModal = () => {
        setConfirmModal(true);
    };

    const handleConfirm = () => {
        form.submit();
    };

    return (
        <Modal
            title="Registrar nova entrada"
            open={isOpen}
            onCancel={() => {
                onClose();
                form.resetFields();
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
                onFinish={(values) => {
                    console.log("TODO: enviar a req de cadastro", values)
                    handleCloseConfirmModal();
                    // um pequeno delay para garantir o fechamento antes de alterar o estado do contexto
                    setTimeout(() => {
                        onOk();
                    }, 0);
                }}
                onFinishFailed={() => console.log("Falha ao enviar")}
                autoComplete="off"
            >
                <Form.Item<RegisterEntryFieldType>
                    name="type"
                    rules={[{ required: true, message: "*campo obrigatório" }]}
                >
                    <Radio.Group>
                        <Radio value="REVENUE"> Receita </Radio>
                        <Radio value="EXPENSE"> Despesa </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item<RegisterEntryFieldType>
                    label="Conta"
                    name="accountId"
                    rules={[{ required: true, message: "*campo obrigatório" }]}
                >
                    <Select>
                        <Select.Option value="39c9765b-10d8-477d-b8aa-8219f953a6dc">
                            NUBANK
                        </Select.Option>
                        <Select.Option value="INTER">INTER</Select.Option>
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
                    <Button type="primary" onClick={handleOpenConfirmModal}>
                        Cadastrar
                    </Button>
                </Form.Item>
            </Form>

            <Modal
                title="Confirmação"
                open={confirmModal}
                onCancel={handleCloseConfirmModal}
                onOk={handleConfirm}
            >
                <p>Confirma o cadastro da operação?</p>
            </Modal>
        </Modal>
    );
};
