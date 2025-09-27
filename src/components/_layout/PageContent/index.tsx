import { cn } from "@/utils/tailwinds";
import type { PropsWithChildren } from "react";

interface PageContentProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function PageContent({
  className,
  children,
  ...props
}: PageContentProps) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className={cn("size-full overflow-y-auto", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
