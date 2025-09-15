import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import viVN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "dayjs/locale/vi";

import AppRouter from "@/routes";

dayjs.locale("vi");

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StyleProvider layer>
        <ConfigProvider locale={viVN}>
          <QueryClientProvider client={queryClient}>
            <AppRouter />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </StyleProvider>
    </>
  );
}
