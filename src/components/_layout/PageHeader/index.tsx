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
import type { PropsWithChildren } from "react";

export default function PageHeader({ children }: PropsWithChildren) {
  const { toggleSidebar, isExpand } = useSidebar();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { activeRole } = useAuth();

  const pathSnippets = pathname.split("/").filter(Boolean);
  const breadcrumbList = pathSnippets.map((_, index) => {
    const url = "/" + pathSnippets.slice(0, index + 1).join("/");
    const label = breadcrumbNameMap[url] ?? url.split("/").pop();

    const routeActive = pathname === url;

    return {
      title: (
        <span
          className={cn("hover:text-primary cursor-pointer", {
            "text-primary cursor-default font-semibold": routeActive,
          })}
          onClick={() => !routeActive && navigate(url)}
        >
          {label}
        </span>
      ),
    };
  });

  if (activeRole === ROLES.STUDENT)
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
    <div className="h-12 flex items-center justify-between border-b pl-2 pr-4 bg-background z-40 transition-[width] delay-200 ease-in-out sticky top-0">
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-2 flex-1 justify-end">
        {children}
      </div>
    </div>
  );
}
