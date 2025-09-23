import { ROUTES } from "@/routes/utils";
import {
  faBell,
  faLayerGroup,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Settings() {
  return (
    <div className="bg-background p-4">
      <div className="mx-auto max-w-7xl w-full space-y-4">
        <section className="border rounded overflow-hidden">
          <header className="px-4 py-2 border-b bg-primary text-primary-foreground">
            <h2 className="font-semibold">Cá nhân</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
            <Link
              className="rounded bg-accent border overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 hover:border-primary cursor-pointer"
              to={ROUTES.SETTINGS_PROFILE}
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faPerson}
                  size="lg"
                />
              </div>
              <div>
                <h3 className="font-semibold">Thông tin cá nhân</h3>
                <span className="text-xs">
                  Xem và quản lý thông tin các nhân
                </span>
              </div>
            </Link>
            <Link
              className="rounded bg-accent border overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 hover:border-primary cursor-pointer"
              to={ROUTES.SETTINGS_PROFILE}
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faBell}
                  size="lg"
                />
              </div>
              <div>
                <h3 className="font-semibold">Thông báo</h3>
                <span className="text-xs">Xem và cài đặt thông báo</span>
              </div>
            </Link>
          </div>
        </section>
        <section className="border rounded overflow-hidden">
          <header className="px-4 py-2 border-b bg-primary text-primary-foreground">
            <h2 className="font-semibold">Cài đặt</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
            <Link
              className="rounded bg-accent border overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 hover:border-primary cursor-pointer"
              to={ROUTES.SETTINGS_PROFILE}
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faLayerGroup}
                  size="lg"
                />
              </div>
              <div>
                <h3 className="font-semibold">Giao diện</h3>
                <span className="text-xs">Xem và cài đặt giao diện</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
