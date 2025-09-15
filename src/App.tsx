import { StyleProvider } from "@ant-design/cssinjs";
import viVN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/vi";

import AppRouter from "@/routes";

dayjs.locale("vi");

export default function App() {
  return (
    <>
      <StyleProvider layer>
        <ConfigProvider locale={viVN}>
          <AppRouter />
        </ConfigProvider>
      </StyleProvider>
    </>
  );
}
