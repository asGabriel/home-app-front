import './styles.scss'
import { HmPage } from "../../../components/HmPage"
import { useController } from "./controller"
import { Button, Col, Row } from "antd";
import { Content } from 'antd/es/layout/layout';
import { InvoicesTable } from './InvoicesTable';

export const InvoicesPage = () => {
    const controller = useController();

    const handleButtonClick = async () => {
        const response = await controller.test();
        console.log(response)

        return response
    }

    return (
        <HmPage>
            <Row justify='end' className="page-header">
                <Col>
                    <Button onClick={handleButtonClick} type='primary'>Adicionar</Button>
                </Col>
            </Row>
            <Content>
                <InvoicesTable />
            </Content>
        </HmPage>
    )
}