import { Button, DatePicker, Form, Input, InputNumber, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { RegisterEntryFieldType } from "../types";
import { CreateEntryPayload, Entry } from "../../../../module/financial/entries/types";
import { useNavigate, useParams } from "react-router";
import dayjs from 'dayjs';
import { Account } from "../../../../module/financial/accounts/types";

export interface ModalProps<T, TRes> {
    isOpen: boolean;
    onClose: () => void;
    onOk: (payload: T) => Promise<TRes>;
    accounts: Account[]
}

export const RegisterEntryForm = ({ isOpen, onClose, onOk, accounts }: ModalProps<CreateEntryPayload, Entry>) => {
    const [form] = Form.useForm();
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleCloseConfirmModal = () => setConfirmModal(false);
    const handleOpenConfirmModal = () => setConfirmModal(true);

    const handleConfirm = async () => {
        try {
            await form.validateFields();
            const values: RegisterEntryFieldType = form.getFieldsValue();

            const payload: CreateEntryPayload = {
                accountId: values.accountId,
                description: values.description,
                entryType: values.type,
                value: values.value,
                invoiceId: id ?? "",
                dueDate: dayjs(values.dueDate).format("YYYY-MM-DD"),
                tag: [],
            };

            setConfirmModal(false);

            await onOk(payload);
            form.resetFields();
            onClose();

            navigate(`/invoices/${id}`, { state: { refresh: true } });
        } catch (error) {
            console.error("Erro ao confirmar:", error);
        }
    };

    return (
        <Modal
            title="Registrar nova entrada"
            open={isOpen}
            onCancel={onClose}
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
                        {accounts.map((acc) =>
                            <Select.Option value={acc.accountId}>{`${acc.bankName} - ${acc.owner}`}</Select.Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item<RegisterEntryFieldType>
                    label="Valor (R$)"
                    name="value"
                    rules={[{ required: true, message: "*campo obrigatório" }]}
                >
                    <InputNumber min={1} max={9999} defaultValue={0} />
                </Form.Item>

                <Form.Item<RegisterEntryFieldType>
                    label="Descrição"
                    name="description"
                    rules={[{ required: true, message: "*campo obrigatório" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<RegisterEntryFieldType>
                    label="Vencimento"
                    name="dueDate"
                    rules={[{ required: true, message: "*campo obrigatório" }]}
                >
                    <DatePicker />
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
