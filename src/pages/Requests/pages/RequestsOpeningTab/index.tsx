import { cn } from "@/utils/tailwinds";
import { useState } from "react";

type Request = {
  id: string;
  title: string;
  company: string;
  description: string;
};

const requests: Request[] = Array(15)
  .fill({
    title: "Senior Frontend Developer (VueJS, ReactJS, Angular)",
    company: "Ahasoft",
    description:
      "Working with AI tools and modern tech stack. Attractive and competitive benefits package. Opportunity for promotion to Team Leader.",
  })
  .map((item, index) => ({ ...item, id: index.toString() }));

export default function RequestsOpeningTab() {
  const [activeRequestId, setActiveRequestId] = useState<string>(
    requests[0].id
  );
  const activeRequest = requests.find((item) => item.id === activeRequestId);
  return (
    <div className="flex gap-4">
      <ul className="flex-1 space-y-2">
        {requests.map((item, index) => {
          const isActive = item.id === activeRequestId;
          return (
            <li
              className={cn(
                "relative rounded border border-transparent bg-accent hover:bg-primary/10 p-4 cursor-pointer",
                {
                  "bg-primary/10 border-primary": isActive,
                }
              )}
              key={index}
              onClick={() => setActiveRequestId(item.id)}
            >
              <span>{item.company}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {isActive && (
                <>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-3/4 bg-primary rounded-e-full" />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-primary" />
                </>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex-2 shadow p-4 rounded sticky">
        {activeRequest?.title}
        <div>{activeRequest?.description}</div>
      </div>
    </div>
  );
}
