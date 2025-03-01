import { Button, Form, Input, InputNumber, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { RegisterEntryFieldType } from "../types";
import { CreateEntryPayload, Entry } from "../../../../module/financial/entries/types";
import { useNavigate } from "react-router";

export interface ModalProps<T, TRes> {
    isOpen: boolean;
    onClose: () => void;
    onOk: (payload: T) => Promise<TRes>;
}

export const RegisterEntryForm = ({ isOpen, onClose, onOk }: ModalProps<CreateEntryPayload, Entry>) => {
    const [form] = Form.useForm();
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleCloseConfirmModal = () => setConfirmModal(false);
    const handleOpenConfirmModal = () => setConfirmModal(true);

    const handleConfirm = async () => {
        try {
            await form.validateFields();
            const values = form.getFieldsValue();
            const payload: CreateEntryPayload = {
                accountId: values.accountId,
                description: values.description,
                entryType: values.type,
                value: values.value,
                invoiceId: "e1e6192d-052d-4c7b-b766-452905644527",
                dueDate: "2025-01-01",
                tag: [],
            };

            setConfirmModal(false);

            await onOk(payload);
            form.resetFields();
            onClose();

            navigate("/invoices/e1e6192d-052d-4c7b-b766-452905644527", { state: { refresh: true } });
         } catch (error) {
            console.error("Erro ao confirmar:", error);
        }
    };

    return (
        <Modal
            title="Registrar nova entrada"
            open={isOpen}
            footer={null}
        >
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={() => handleOpenConfirmModal()}
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
                        <Select.Option value="39c9765b-10d8-477d-b8aa-8219f953a6dc">NUBANK</Select.Option>
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
