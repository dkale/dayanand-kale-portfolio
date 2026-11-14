import { cn } from "@/lib/utils";
import type { Tier } from "@/data/portfolio";

const styles: Record<Tier, string> = {
  architecture: "border-primary/40 bg-accent text-accent-foreground",
  core: "border-border bg-card text-foreground",
  tool: "border-dashed border-border bg-transparent text-muted-foreground",
};
export function TechTag({ label, tier = "core", className }: { label: string; tier?: Tier; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[0.72rem]", styles[tier], className)}>{label}</span>;
}
