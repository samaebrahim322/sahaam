import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export function PageBanner({ title, crumb, children }: { title: string; crumb: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 right-10 size-96 rounded-full bg-navy/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <nav aria-label="مسار التنقل" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ChevronLeft className="size-4" />
          <span className="text-navy">{crumb}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-navy md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
