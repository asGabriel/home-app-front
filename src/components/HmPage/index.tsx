import './styles.scss'
import { AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider"
import React from "react";

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

type HmPageProps = {
    children: React.ReactNode
}

export const HmPage: React.FC<HmPageProps> = ({ children }) => {
    return (
        <Layout hasSider className='page'>
            <Sider className='sider'>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: 'yellow' }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100%' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: 'blue',
                            borderRadius: '5px',
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>

        </Layout>
    )
}