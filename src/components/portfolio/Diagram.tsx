import type { DiagramKind } from "@/data/portfolio";

type N = { x: number; y: number; l: string; a?: boolean; w?: number };
type D = { nodes: N[]; edges: [number, number][] };

const presets: Record<DiagramKind, D> = {
  platform: { nodes: [{ x: 30, y: 30, l: "FTP" }, { x: 30, y: 80, l: "API" }, { x: 30, y: 130, l: "Email" }, { x: 140, y: 80, l: "Ingest", a: true }, { x: 245, y: 50, l: "Match" }, { x: 245, y: 110, l: "MDM", a: true }, { x: 345, y: 80, l: "Export" }], edges: [[0, 3], [1, 3], [2, 3], [3, 4], [4, 5], [5, 6]] },
  grid: { nodes: [{ x: 60, y: 40, l: "State", a: true }, { x: 60, y: 120, l: "Config<T>" }, { x: 190, y: 80, l: "CatalystGrid", a: true, w: 90 }, { x: 320, y: 30, l: "Feature A" }, { x: 320, y: 80, l: "Feature B" }, { x: 320, y: 130, l: "Feature C" }], edges: [[0, 2], [1, 2], [2, 3], [2, 4], [2, 5]] },
  agents: { nodes: [{ x: 45, y: 80, l: "Task" }, { x: 140, y: 35, l: "Planner" }, { x: 140, y: 125, l: "Coder" }, { x: 245, y: 80, l: "TDD Gate", a: true }, { x: 345, y: 80, l: "Merge" }, { x: 245, y: 145, l: "Memory" }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 1]] },
  sync: { nodes: [{ x: 45, y: 50, l: "SFTP" }, { x: 45, y: 115, l: "Tenant" }, { x: 175, y: 80, l: "Diff Sync", a: true }, { x: 175, y: 145, l: "Throttle" }, { x: 310, y: 50, l: "Blob" }, { x: 310, y: 115, l: "Recovery" }], edges: [[0, 2], [1, 2], [2, 3], [2, 4], [2, 5]] },
  cache: { nodes: [{ x: 45, y: 80, l: "Service" }, { x: 145, y: 80, l: "L1 Memory", a: true }, { x: 250, y: 80, l: "L2 Redis", a: true }, { x: 345, y: 80, l: "DB" }, { x: 200, y: 140, l: "Backplane" }], edges: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 2]] },
  recon: { nodes: [{ x: 45, y: 45, l: "Source A" }, { x: 45, y: 120, l: "Source B" }, { x: 180, y: 80, l: "Rules", a: true }, { x: 310, y: 45, l: "Matched" }, { x: 310, y: 120, l: "Breaks" }], edges: [[0, 2], [1, 2], [2, 3], [2, 4]] },
  microservices: { nodes: [{ x: 45, y: 80, l: "Gateway", a: true }, { x: 170, y: 30, l: "Orders" }, { x: 170, y: 80, l: "Catalog" }, { x: 170, y: 130, l: "Billing" }, { x: 310, y: 80, l: "Bus", a: true }], edges: [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4]] },
  events: { nodes: [{ x: 50, y: 80, l: "Producer" }, { x: 180, y: 80, l: "Topic", a: true }, { x: 315, y: 30, l: "Consumer" }, { x: 315, y: 80, l: "Consumer" }, { x: 315, y: 130, l: "DLQ" }], edges: [[0, 1], [1, 2], [1, 3], [1, 4]] },
  cqrs: { nodes: [{ x: 45, y: 45, l: "Command" }, { x: 160, y: 45, l: "Write", a: true }, { x: 275, y: 45, l: "Events" }, { x: 275, y: 120, l: "Projection" }, { x: 160, y: 120, l: "Read", a: true }, { x: 45, y: 120, l: "Query" }], edges: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 4]] },
  tenant: { nodes: [{ x: 45, y: 35, l: "Tenant A" }, { x: 45, y: 80, l: "Tenant B" }, { x: 45, y: 125, l: "Tenant C" }, { x: 180, y: 80, l: "Context", a: true }, { x: 315, y: 80, l: "Data", a: true }], edges: [[0, 3], [1, 3], [2, 3], [3, 4]] },
  cloud: { nodes: [{ x: 45, y: 80, l: "Trigger" }, { x: 155, y: 80, l: "Function", a: true }, { x: 265, y: 40, l: "Service Bus" }, { x: 265, y: 120, l: "Key Vault" }, { x: 360, y: 80, l: "OTel" }], edges: [[0, 1], [1, 2], [1, 3], [2, 4]] },
  frontend: { nodes: [{ x: 60, y: 80, l: "Store", a: true }, { x: 185, y: 35, l: "Grid" }, { x: 185, y: 80, l: "Form" }, { x: 185, y: 125, l: "Chart" }, { x: 315, y: 80, l: "Feature", a: true }], edges: [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4]] },
};

export function Diagram({ kind, className, label }: { kind: DiagramKind; className?: string; label?: string }) {
  const d = presets[kind];
  return (
    <svg viewBox="0 0 400 165" className={className} role="img" aria-label={label ?? `Conceptual diagram: ${kind}`}>
      <defs>
        <pattern id={`g-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" className="fill-none stroke-grid" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="165" fill={`url(#g-${kind})`} />
      {d.edges.map(([a, b], i) => {
        const p = d.nodes[a], q = d.nodes[b];
        return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} className="stroke-primary/50" strokeWidth="1" strokeDasharray={i % 2 ? "3 3" : undefined} />;
      })}
      {d.nodes.map((n, i) => {
        const w = n.w ?? Math.max(56, n.l.length * 6.4 + 16);
        return (
          <g key={i}>
            <rect x={n.x - w / 2} y={n.y - 11} width={w} height={22} rx="3" className={n.a ? "fill-accent stroke-primary" : "fill-card stroke-border"} strokeWidth="1" />
            <text x={n.x} y={n.y + 3.5} textAnchor="middle" className={n.a ? "fill-accent-foreground" : "fill-muted-foreground"} style={{ font: "500 9.5px var(--font-mono)" }}>{n.l}</text>
          </g>
        );
      })}
    </svg>
  );
}
