import './styles.scss'
import { HomeFilled, FundFilled } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from 'react-router';

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <HomeFilled />,
    label: 'Home',
  },
  {
    key: '2',
    icon: <FundFilled />,
    label: 'Finanças',
  },
];

type HmPageProps = {
  children: React.ReactNode
}

export const HmPage: React.FC<HmPageProps> = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/invoices');
        break;
      default:
        break;
    }
  };

  return (
    <Layout className='page'>
      <Header className='header'>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          className='menu'
          onClick={handleMenuClick}
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
            height: '100%'
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