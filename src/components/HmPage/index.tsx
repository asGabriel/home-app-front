import './styles.scss'
import { BarChartOutlined, FileDoneOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <FileDoneOutlined />,
    label: 'Finanças',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'Câmera',
  },
  {
    key: '3',
    icon: <BarChartOutlined />,
    label: 'Relatórios',
  },
];

type HmPageProps = {
  children: React.ReactNode
}

export const HmPage: React.FC<HmPageProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='page'>
      <Header className='header'>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          className='header menu'
        />
      </Header>
      <Content className='content'>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Finanças</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}