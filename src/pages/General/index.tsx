import { ROUTES } from "@/routes/utils";
import {  faChalkboardTeacher, faUsers, faUsersGear, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function General() {
  return (
    <div className="px-2">
      <div className="mx-auto max-w-7xl w-full p-4 bg-background">
        <section className="border rounded overflow-hidden">
          <header className="px-4 py-2 border-b bg-primary text-primary-foreground">
            <h2 className="font-semibold">Nguời dùng và phân quyền</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
            <Link
              to={ROUTES.ADMIN_GENERAL_INSTRUCTORS}
              className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 cursor-pointer"
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon className="text-primary" icon={faChalkboardTeacher} />
              </div>
              <div className="">
                <h3 className="font-semibold">Giáo viên</h3>
                <span className="text-xs">Thêm mới và quản lý giáo viên</span>
              </div>
            </Link>
            <Link
              to={ROUTES.ADMIN_GENERAL_STUDENTS}
              className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 cursor-pointer"
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon className="text-primary" icon={faUsers} />
              </div>
              <div className="">
                <h3 className="font-semibold">Sinh viên</h3>
                <span className="text-xs">Thêm mới và quản lý sinh viên</span>
              </div>
            </Link>
            <Link
              to={ROUTES.ADMIN_GENERAL_ACCOUNTS}
              className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 cursor-pointer"
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon className="text-primary" icon={faUsersGear} />
              </div>
              <div className="">
                <h3 className="font-semibold">Tài khoản</h3>
                <span className="text-xs">Thêm mới và quản lý tài khoản</span>
              </div>
            </Link>
            <Link
              to={ROUTES.ADMIN_GENERAL_ROLES}
              className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 cursor-pointer"
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon className="text-primary" icon={faUserShield} />
              </div>
              <div className="">
                <h3 className="font-semibold">Phân quyền</h3>
                <span className="text-xs">Thêm mới và quản lý phân quyền</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
