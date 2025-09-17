import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { CATEGORIES_LIST } from "./utils";

export default function Categories() {
  return (
    <div className="px-2">
      <div className="mx-auto max-w-7xl w-full p-4 bg-background space-y-4">
        {CATEGORIES_LIST.map((group, index) => (
          <section className="border rounded overflow-hidden" key={index}>
            <header className="px-4 py-2 border-b bg-primary text-primary-foreground">
              <h2 className="font-semibold">{group.title}</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              {group.childrens.map((item, index) => (
                <Link
                  className="rounded-sm bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 cursor-pointer"
                  to={item.path}
                  key={index}
                >
                  <div className="size-10 bg-background flex items-center justify-center rounded">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={item.icon}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-xs">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
