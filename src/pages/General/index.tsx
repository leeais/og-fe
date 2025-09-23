import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { GENERALS_LIST } from "./utils";

export default function General() {
  return (
    <div className="bg-background p-4">
      <div className="mx-auto max-w-7xl w-full space-y-4">
        {GENERALS_LIST.map((group, index) => (
          <section className="border rounded overflow-hidden" key={index}>
            <header className="px-4 py-2 border-b bg-primary text-primary-foreground">
              <h2 className="font-semibold">{group.title}</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              {group.children.map((item, index) => (
                <Link
                  className="rounded border bg-accent overflow-hidden p-4 flex items-center gap-4 hover:bg-primary/10 hover:border-primary cursor-pointer"
                  to={item.path}
                  key={index}
                >
                  <div className="size-10 bg-background flex items-center justify-center rounded">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={item.icon}
                      size="lg"
                    />
                  </div>
                  <div className="">
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
