import { Modal } from "antd";
import { useEffect, useState } from "react";

export interface HmModalProps {
    isOpen: boolean
    handleOk?: () => void
}

export const HmModal = ({ isOpen, handleOk }: HmModalProps) => {
    console.log("montou modal")
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onOk = () => {
        if (handleOk) {
            handleOk()
        }
        setIsModalOpen(false)
    }

    return (
        <Modal title="Basic Modal" open={isModalOpen} onOk={onOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}