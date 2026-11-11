import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className="group rounded-2xl border border-border bg-card px-6 py-5 shadow-card open:border-primary/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy">
            {it.q}
            <Plus className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
          </summary>
          <p className="mt-3 leading-8 text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
