import { ROUTES } from "@/routes/utils";
import {
  faBell,
  faLayerGroup,
  faPerson,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

type SettingsItemType = {
  name: string;
  description: string;
  icon: IconDefinition;
  path: string;
};

type SettingsGroupType = {
  title: string;
  children: SettingsItemType[];
};

export const SETTINGS_LIST: SettingsGroupType[] = [
  {
    title: "Cá nhân",
    children: [
      {
        name: "Thông tin tài khoản",
        description: "Xem và quản lý thông tin tài khoản",
        icon: faPerson,
        path: ROUTES.SETTINGS_PROFILE,
      },
      {
        name: "Thông báo",
        description: "Xem và cài đặt thông báo",
        icon: faBell,
        path: "#",
      },
    ],
  },
  {
    title: "Thiết lập",
    children: [
      {
        name: "Giao diện",
        description: "Xem và cài đặt giao diện",
        icon: faLayerGroup,
        path: "#",
      },
    ],
  },
];
