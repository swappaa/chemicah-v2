import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function Separator({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn(className)}>
      <Icons.divider className="h-full w-full fill-accent/50" />
    </div>
  );
}
