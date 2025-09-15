import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Divider } from "antd";
import { useNavigate } from "react-router";

import { useSidebar } from "@/hooks/useSidebar";
import { ROUTES } from "@/routes/utils";

export default function SubHeader() {
  const { toggleSidebar, isExpand } = useSidebar();
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="h-10 flex items-center border-b gap-2 px-2 bg-background">
        <Button
          type="text"
          icon={
            <FontAwesomeIcon icon={isExpand ? faAnglesLeft : faAnglesRight} />
          }
          onClick={toggleSidebar}
        />
        <Divider size="large" type="vertical" />
        <Breadcrumb
          items={[
            {
              title: (
                <span
                  className="cursor-pointer hover:text-primary"
                  onClick={() => navigate(ROUTES.ADMIN)}
                >
                  Dashboard
                </span>
              ),
            },
            {
              title: "Danh mục",
            },
          ]}
        />
      </div>
    </div>
  );
}
