import Logo from "@/components/_layout/DashboardLayout/components/Logo";
import PopoverAvatar from "../PopoverAvatar";
import { Button, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faUserShield } from "@fortawesome/free-solid-svg-icons";
import PopoverNotifications from "../PopoverNotifications";
import ModalSearch from "../ModalSearch";
import { useAuth } from "@/hooks/useAuth";
import { rolesMappingName, type RoleEnum } from "@/config/roles";

export default function Header() {
  const { roles, activeRole, switchActiveRole } = useAuth();
  const rolesOptions = roles?.map((value: RoleEnum) => ({
    label: rolesMappingName[value],
    value: value,
  }));

  return (
    <header className="relative">
      <div className="h-12 w-full" />
      <div className="w-full h-12 bg-primary fixed top-0 left-0 text-primary-foreground pr-6 flex items-center justify-between gap-4 z-50 shrink-0">
        <div className="flex items-center">
          <div className="w-[250px] h-full pl-6">
            <Logo />
          </div>
          <Select
            className="w-40"
            defaultValue={activeRole}
            options={rolesOptions}
            onChange={switchActiveRole}
            suffixIcon={
              <FontAwesomeIcon
                className="text-primary"
                icon={faUserShield}
                size="lg"
              />
            }
          />
        </div>

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
