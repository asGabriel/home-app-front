import { ConfigProvider } from "antd";

// TODO: verificar o funcionamento do token
const customTheme = {
  token: {
    colorBgContainer: "#CFCFCF",
    borderRadiusLG: 8,
  },
};

interface AppColorTokenProviderProps {
  children: React.ReactNode;
}

export const AppColorTokenProvider: React.FC<AppColorTokenProviderProps> = ({
  children,
}) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};
