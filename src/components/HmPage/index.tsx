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
            <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: 'yellow' }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: 'blue',
                            // borderRadius: borderRadiusLG,
                        }}
                    >
                        <p>long content</p>
                        {children}
                        {
                            // indicates very long content
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>

        </Layout>
    )
}