import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Divider } from "antd";
import { useLocation, useNavigate } from "react-router";

import { useSidebar } from "@/hooks/useSidebar";
import { breadcrumbNameMap, ROUTES } from "@/routes/utils";
import { cn } from "@/utils/tailwinds";
import { useAuth } from "@/hooks/useAuth";
import { ROLES } from "@/config/roles";

export default function SubHeader() {
  const { toggleSidebar, isExpand } = useSidebar();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { roles } = useAuth();

  const pathSnippets = pathname.split("/").filter(Boolean);
  const breadcrumbList = pathSnippets.map((_, index) => {
    const url = "/" + pathSnippets.slice(0, index + 1).join("/");
    const label = breadcrumbNameMap[url] ?? url.split("/").pop();

    const routeActiving = pathname === url;

    return {
      title: (
        <span
          className={cn("hover:text-primary cursor-pointer", {
            "text-primary cursor-default font-semibold": routeActiving,
          })}
          onClick={() => !routeActiving && navigate(url)}
        >
          {label}
        </span>
      ),
    };
  });

  if (roles?.includes(ROLES.STUDENT))
    breadcrumbList.unshift({
      title: (
        <span
          className={cn("hover:text-primary cursor-pointer", {
            "text-primary cursor-default font-semibold":
              pathname === ROUTES.ROOT,
          })}
          onClick={() => pathname !== ROUTES.ROOT && navigate(ROUTES.ROOT)}
        >
          <FontAwesomeIcon icon={faHouse} />
        </span>
      ),
    });
  return (
    <div className="h-10 w-full flex items-center border-b gap-2 px-2 bg-background sticky top-12 z-40">
      <Button
        type="text"
        icon={
          <FontAwesomeIcon icon={isExpand ? faAnglesLeft : faAnglesRight} />
        }
        onClick={toggleSidebar}
      />
      <Divider size="large" type="vertical" />
      <Breadcrumb items={breadcrumbList} />
    </div>
  );
}
