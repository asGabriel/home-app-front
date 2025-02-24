import { Button, Checkbox, Form, Input, Modal } from "antd"
import { useState } from "react";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    onOk: () => void
}

export const RegisterEntryForm = ({ isOpen, onClose, onOk }: ModalProps) => {

    return (
        <Modal
            destroyOnClose
            open={isOpen}
            onOk={() => {
                console.log("ok do modal");
                onOk()
                // Aqui você pode chamar uma função para fechar o modal via contexto ou callback da prop
            }}
        >
            Testando modal componente
        </Modal>
    );
};
