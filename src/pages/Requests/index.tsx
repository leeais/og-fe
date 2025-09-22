import { ROUTES } from "@/routes/utils";
import { Button, Tabs, type TabsProps } from "antd";
import { lazy } from "react";
import { useNavigate } from "react-router";

const RequestsOpeningTab = lazy(
  () => import("@/pages/Requests/pages/RequestsOpeningTab")
);
const RequestsHistoryTab = lazy(
  () => import("@/pages/Requests/pages/RequestsHistoryTab")
);

export default function Requests() {
  const navigate = useNavigate();

  const tabsList: TabsProps["items"] = [
    {
      label: "Yêu cầu đang mở",
      key: "opening",
      children: <RequestsOpeningTab />,
    },
    {
      label: "Tất cả yêu cầu",
      key: "all",
      children: <RequestsHistoryTab />,
    },
  ];

  return (
    <div className="bg-background px-4">
      <Tabs
        tabBarExtraContent={
          <Button type="primary" onClick={() => navigate(ROUTES.REQUESTS_ADD)}>
            Tạo yêu cầu mới
          </Button>
        }
        items={tabsList}
      />
    </div>
  );
}
