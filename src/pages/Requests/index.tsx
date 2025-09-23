import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Tabs, type TabsProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import RequestsHistoryTab from "@/pages/Requests/pages/RequestsHistoryTab";
import RequestsOpeningTab from "@/pages/Requests/pages/RequestsOpeningTab";
import { ROUTES } from "@/routes/utils";

type TabKey = "opening" | "all";

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

export default function Requests() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<TabKey>("opening");

  const handleTabChange: TabsProps["onChange"] = (key) => {
    setActiveKey(key as TabKey);
  };

  return (
    <div className="bg-background px-4">
      <Tabs
        className="pb-4"
        activeKey={activeKey}
        onChange={handleTabChange}
        items={tabsList}
        tabBarExtraContent={
          <div className="flex items-center gap-2">
            <Button icon={<FontAwesomeIcon icon={faSearch} />} />
            <Button icon={<FontAwesomeIcon icon={faFilter} />} />
            <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
            <Button
              type="primary"
              onClick={() => navigate(ROUTES.REQUEST_CREATION)}
            >
              Tạo yêu cầu mới
            </Button>
          </div>
        }
      />
    </div>
  );
}
