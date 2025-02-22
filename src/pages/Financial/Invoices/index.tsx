import './styles.scss'
import { HmPage } from "../../../components/HmPage"
import { useFinancialController } from "../controller"
import { Button, Col, Row } from "antd";
import { Content } from 'antd/es/layout/layout';
import { InvoicesTable } from './InvoicesTable';
import { useEffect, useState } from 'react';
import { Invoice } from '../../../module/financial/invoices/types';

export const InvoicesPage = () => {
    const controller = useFinancialController();
    const [invoicesData, setInvoicesData] = useState<Invoice[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const invoices = await controller.fetchInvoices();
            setInvoicesData(invoices);
        };

        fetchData();
    }, []);

    const handleButtonClick = async () => {
        console.log("TODO: cadastrar entrada")
    }

    return (
        <HmPage>
            <Row justify='end' className="page-header">
                <Col>
                    <Button onClick={handleButtonClick} type='primary'>Adicionar</Button>
                </Col>
            </Row>
            <Content>
                <InvoicesTable
                    dataSource={invoicesData}
                    onEdit={controller.deleteInvoiceById}
                    onDelete={controller.editInvoiceById}
                />
            </Content>
        </HmPage>
    )
}