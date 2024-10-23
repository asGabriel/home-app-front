import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import "./styles.css";
import { Footer } from "antd/es/layout/layout";

const { Header, Sider, Content } = Layout;

interface AppLayoutProps {
  children?: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: <a href="/">Dashboard</a> },
  { key: "2", icon: <DesktopOutlined />, label: <a href="/finance">Finanças</a> },
];

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{height: '100vh'}}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, marginBottom: '10px'}} />
        <Content style={{ margin: "0 16px"}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '100%'
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
