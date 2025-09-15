import { useLocation, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "antd";

import { useSidebar } from "@/hooks/useSidebar";
import { DASHBOARD_NAVBAR_LINKS } from "@/constants/sidebar";
import { cn } from "@/utils/tailwinds";
import { ROUTES } from "@/routes/utils";

export default function Sidebar() {
  const { width, isExpand } = useSidebar();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <aside>
      <div
        className="transition-[width] delay-200 ease-in-out"
        style={{ width }}
      />
      <div
        className="fixed top-12 left-0 h-[calc(100vh-56px)] transition-[width] delay-200 ease-in-out border-r flex flex-col pt-10 z-50"
        style={{ width }}
      >
        <nav className="flex-1 overflow-x-hidden overflow-y-auto">
          {DASHBOARD_NAVBAR_LINKS.map((item) => {
            let isActive: boolean;

            if (item.path === ROUTES.ROOT || item.path === ROUTES.ADMIN) {
              isActive = item.path === pathname;
            } else {
              isActive = pathname.includes(item.path);
            }

            return (
              <li key={item.path}>
                <Tooltip title={isExpand ? null : item.label} placement="right">
                  <Button
                    className={cn("rounded-none w-full justify-start", {
                      "text-primary bg-primary/10": isActive,
                    })}
                    type="text"
                    size="large"
                    icon={
                      <FontAwesomeIcon
                        icon={isActive ? item.activeIcon : item.icon}
                      />
                    }
                    onClick={() => navigate(item.path)}
                  >
                    <span
                      className={cn("text-sm transition-opacity delay-200", {
                        "opacity-100": isExpand,
                        "opacity-0": !isExpand,
                      })}
                    >
                      {item.label}
                    </span>
                  </Button>
                </Tooltip>
              </li>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
