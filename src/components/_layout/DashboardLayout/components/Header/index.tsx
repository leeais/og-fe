import Logo from "@/components/_layout/DashboardLayout/components/Logo";
import PopoverAvatar from "../PopoverAvatar";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import PopoverNotifications from "../PopoverNotifications";
import ModalSearch from "../ModalSearch";

export default function Header() {
  return (
    <header className="relative">
      <div className="h-12 w-full" />
      <div className="w-full h-12 bg-primary fixed top-0 left-0 text-primary-foreground px-6 flex items-center justify-between gap-4 z-50 shrink-0">
        <Logo />

        <div className="flex-1 flex justify-end items-center gap-2">
          <ModalSearch />
          <PopoverNotifications />
          <Button
            className="text-primary-foreground"
            type="text"
            shape="circle"
            icon={<FontAwesomeIcon icon={faSun} />}
          />
          <PopoverAvatar />
        </div>
      </div>
    </header>
  );
}
