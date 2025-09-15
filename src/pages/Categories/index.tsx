import { ROUTES } from "@/routes/utils";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Categories() {
  return (
    <div className="px-2">
      <div className="mx-auto max-w-7xl w-full p-4 bg-background">
        <section className="border rounded overflow-hidden">
          <header className="px-4 py-2 border-b bg-sky-500 text-primary-foreground">
            <h2 className="font-semibold">Đơn từ</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
            <Link
              to={ROUTES.ADMIN_CATEGORIES_PROCEDURES}
              className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-sky-100 cursor-pointer"
            >
              <div className="size-10 bg-background flex items-center justify-center rounded">
                <FontAwesomeIcon className="text-primary" icon={faFileLines} />
              </div>
              <div className="">
                <h3 className="font-semibold">Thủ tục hành chính</h3>
                <span className="text-xs">
                  Thêm mới và quản lý thủ tục hành chính
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
